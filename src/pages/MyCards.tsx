import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/MyCards.module.css';

const MyCards: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'sent' | 'received'>('all');
  const [searchQuery, setSearchQuery] = useState<string>(''); // Track search input

  // Sample cards data
  const cardsData = [
    { id: 1, text: 'Main Balance', category: 'all' },
    { id: 2, text: 'Sunshine Memory', category: 'sent' },
    { id: 3, text: 'Gift Card', category: 'received' },
    { id: 4, text: 'Travel Card', category: 'sent' },
    { id: 5, text: 'Bonus Card', category: 'received' }
  ];

  // Filter cards based on active category and search query
  const filteredCards = cardsData.filter(card => {
    const matchesCategory = filter === 'all' ? true : card.category === filter;
    const matchesSearch = card.text.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value); // Update the search query
  };

  return (
    <div className={styles.wrapper}>
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <h1 className={styles.header}>My Cards</h1>

      {/* Search Bar */}
      <div className={styles.searchcontainer}>
        <input
          className={styles.searchbar}
          type="text"
          placeholder="Search here..."
          value={searchQuery} // Bind the search input to state
          onChange={handleSearchChange} // Update the search query
        />
      </div>

      {/* Filter Buttons */}
      <div className={styles.buttonContainer}>
        <button
          className={`${styles.allbutton} ${filter === 'all' ? styles.active : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`${styles.sentbutton} ${filter === 'sent' ? styles.active : ''}`}
          onClick={() => setFilter('sent')}
        >
          Sent
        </button>
        <button
          className={`${styles.receivedbutton} ${filter === 'received' ? styles.active : ''}`}
          onClick={() => setFilter('received')}
        >
          Received
        </button>
      </div>

      {/* Cards Section */}
      <div className={styles.cardscontainer}>
        <div className={styles.cards}>
          {filteredCards.map(card => (
            <button key={card.id} className={styles.card}>
              <p className={styles.cardtext}>{card.text}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCards;
