def recommend_learning(missing_skills):
    return [{"skill": s, "priority": "high" if i < 2 else "medium"}
            for i, s in enumerate(missing_skills)]
