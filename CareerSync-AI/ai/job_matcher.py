def calculate_match(student_skills, required_skills):
    required = {s.lower() for s in required_skills}
    student = {s.lower() for s in student_skills}
    if not required:
        return 0
    return round(len(required & student) / len(required) * 100, 2)
