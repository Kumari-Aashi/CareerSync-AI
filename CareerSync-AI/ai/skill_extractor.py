SKILL_DICTIONARY = [
    "Python", "C++", "Java", "SQL", "HTML", "CSS", "JavaScript",
    "Machine Learning", "Deep Learning", "TensorFlow", "PyTorch",
    "Pandas", "NumPy", "Git", "Docker", "Flask", "React"
]

def extract_skills(text: str):
    lower = text.lower()
    return [skill for skill in SKILL_DICTIONARY if skill.lower() in lower]
