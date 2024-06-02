from fastapi import FastAPI, HTTPException
from transformers import pipeline
from collections import defaultdict

app = FastAPI()


@app.post("/process_text/")
async def process_text(text: str):

    ner_pipe = pipeline("token-classification", model="Clinical-AI-Apollo/Medical-NER")
    summarization_pipe = pipeline("summarization", model="Falconsai/text_summarization")

    ner_output = ner_pipe(text)
    ner_dict = defaultdict(lambda: [])
    last_entity = ""
    for entity in ner_output:
        entity['entity'] = entity['entity'][2:]
        if entity['entity'] == last_entity:
            ner_dict[entity['entity']][-1].append(str(entity['word'].replace("▁", "")))
        else:
            ner_dict[entity['entity']].append([str(entity['word']).replace("▁", "")])
        last_entity = entity['entity']

    res = defaultdict(lambda: [])
    for age in ner_dict['AGE']:
        for word in age:
            try:
                age_value = int(word)
                res['age'] = age_value
                break
            except ValueError:
                pass
    res['duration'] = [' '.join(ner_dict['DURATION'][0])]
    res['symptoms'] = [' & '.join(symptom) for symptom in ner_dict['SIGN_SYMPTOM']]
    res['areas_affected'] = [' '.join(area) for area in ner_dict['BIOLOGICAL_STRUCTURE']]
    res['patient_history'] = [' '.join(history) for history in ner_dict['HISTORY']]
    res['family_history'] = [' '.join(history) for history in ner_dict['FAMILY_HISTORY']]
    res['diagnostic_procedure'] = [' '.join(procedure) for procedure in ner_dict['DIAGNOSTIC_PROCEDURE']]

    summarization_output = summarization_pipe(text)
    res['summary'] = [summarization_output[0]['summary_text']]

    return res
