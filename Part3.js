  // Get difficulty label based on value
  const getDifficultyLabel = (value) => {
    const labels = {
      1: 'Very Easy',
      2: 'Easy',
      3: 'Somewhat Easy',
      4: 'Moderate',
      5: 'Neutral',
      6: 'Somewhat Difficult',
      7: 'Difficult',
      8: 'Very Difficult',
      9: 'Extremely Difficult',
      10: 'Unbearable'
    };
    return labels[value] || `${value}/10`;
  };

  // Format date for display
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  // Prepare data for chart
  const chartData = [...entries]
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map(entry => ({
      date: formatDate(entry.date),
      difficulty
