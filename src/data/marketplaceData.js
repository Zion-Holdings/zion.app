export const generateSearchSuggestions = (query) => {
    const suggestions = [
        'AI Services',
        'Cybersecurity',
        'Cloud Migration',
        'Web Development',
        'Mobile Apps',
        'Data Analytics',
        'Blockchain',
        'IT Consulting'
    ];
    if (!query)
        return suggestions.slice(0, 5);
    return suggestions
        .filter(suggestion => suggestion.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 5);
};
