import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import MobileNavbar from "../components/MobileNavbar";
import styles from "../styles/dashboard.module.css";
import profilePic from "../assets/profile.png";

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<{ name: string; avatar: string } | null>(null);
  const [filter, setFilter] = useState<'all' | 'sent' | 'received'>('all');
  const [searchQuery, setSearchQuery] = useState<string>(''); // Track search input
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const userData = { name: "John Doe", avatar: profilePic };
      setUser(userData);
    };
    fetchUser();
  }, []);

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
    <div className={styles.dashboardWrapper}>
      <Navbar />

      <div className={styles.content}>
        <img src={user?.avatar} alt="Profile" className={styles.profileImage} />
        <div className={styles.textContainer}>
          <h1 className={styles.greeting}>Hello <br /> <span className={styles.userName}>{user ? user.name : "User"}</span></h1>
          <button onClick={() => navigate("/cardAdd")} className={styles.addButton}>
            Add Card
          </button>
        </div>
      </div>

      {/* Section My Cards */}
      <div className={styles.myCardsSection}>
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

      <div className={`${styles.mobileNavbarWrapper} mobileNavbarOnly`}>
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Dashboard;
