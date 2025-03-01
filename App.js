    if (editIndex >= 0) {
      // Update existing entry
      const updatedEntries = [...entries];
      updatedEntries[editIndex] = newEntry;
      setEntries(updatedEntries);
      setEditIndex(-1);
    } else {
      // Add new entry
      setEntries([...entries, newEntry]);
    }
    
    // Reset form
    setDate(new Date().toISOString().split('T')[0]);
    setMeal('');
    setWater('');
    setDifficulty(5);
    setNotes('');
    
    // Switch to entries view
    setActiveTab('entries');
  };

  // Edit an entry
  const handleEdit = (index) => {
    const entry = entries[index];
    setDate(entry.date);
    setMeal(entry.meal);
    setWater(entry.water);
    setDifficulty(entry.difficulty);
    setNotes(entry.notes);
    setEditIndex(index);
    setActiveTab('add');
  };

  // Delete an entry
  const handleDelete = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
  };
