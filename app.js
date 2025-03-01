// Main App Component
const SuhoorTracker = () => {
  // Initialize state with local storage data or empty array
  const [entries, setEntries] = React.useState(() => {
    const saved = localStorage.getItem('suhoorTrackerData');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [];
  });
  
  // Form state
  const [date, setDate] = React.useState(new Date().toISOString().split('T')[0]);
  const [meal, setMeal] = React.useState('');
  const [water, setWater] = React.useState('');
  const [difficulty, setDifficulty] = React.useState(5);
  const [notes, setNotes] = React.useState('');
  const [activeTab, setActiveTab] = React.useState('add');
  const [editIndex, setEditIndex] = React.useState(-1);

  // Save to localStorage whenever entries change
  React.useEffect(() => {
    localStorage.setItem('suhoorTrackerData', JSON.stringify(entries));
  }, [entries]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newEntry = {
      date,
      meal,
      water,
      difficulty: Number(difficulty),
      notes
    };
