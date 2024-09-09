import React, { useEffect, useState } from "react";
import "./Home.css";
import icon from "../images/icon.png";
import person from "../images/person.svg";
import Data from "../images/Data.svg";
import ALC from "../images/AL-Challenge.svg";
import notebook from "../images/carbon_notebook-reference.svg";
import Robot from "../images/Robot.svg";
import Vector from "../images/Vector.svg";
import IdentificationCard from "../images/IdentificationCard.svg";
import Logo from "../images/Logo.svg";
import { Link } from "react-router-dom";
import Timer from "./Timer";

function Home() {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    const storedChallenges = localStorage.getItem("challenges");
    if (storedChallenges) {
      setChallenges(JSON.parse(storedChallenges));
    }
  }, []);

  const [showDropdown, setShowDropdown] = useState(false);
  const [statusFilters, setStatusFilters] = useState([]);
  const [levelFilters, setLevelFilters] = useState([]);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleStatusChange = (event) => {
    const { value } = event.target;
    setStatusFilters((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleLevelChange = (event) => {
    const { value } = event.target;
    setLevelFilters((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const filteredChallenges = challenges.filter((challenge) => {
    const statusMatch =
      statusFilters.length === 0 ||
      statusFilters.includes("All") ||
      statusFilters.includes(challenge.status);

    const levelMatch =
      levelFilters.length === 0 || levelFilters.includes(challenge.level);

    return statusMatch && levelMatch;
  });

  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img src={icon} alt="Logo" />
        </div>
      </header>

      <main className="main-content">
        <section className="challenge-section">
          <div className="text-content">
            <h1>Accelerate Innovation with Global AI Challenges</h1>
            <p>
              AI Challenges at DPhi simulate real-world problems. It is a great
              place to put your AI/Data Science skills to the test on diverse
              datasets, allowing you to foster learning through competitions.
            </p>
            <Link to="/forms">
              <button className="create-challenge-button">
                Create Challenge
              </button>
            </Link>
          </div>
          <div className="rocket-image">
            <img src={Logo} alt="Rocket" />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="stats">
          <div className="stat-item">
            <img src={Data} alt="AI model submissions icon" />
            <p>
              100K+
              <br />
              AI model submissions
            </p>
          </div>
          <div className="stat-item">
            <img src={person} alt="Data Scientists icon" />
            <p>
              50K+
              <br />
              Data Scientists
            </p>
          </div>
          <div className="stat-item">
            <img src={ALC} alt="AI Challenges hosted icon" />
            <p>
              100+
              <br />
              AI Challenges hosted
            </p>
          </div>
        </div>
      </footer>

      <div className="why-participate">
        <h2 style={{ color: "black" }}>
          Why Participate in <span className="highlight">AI Challenges?</span>
        </h2>
        <div className="grid-container">
          <div className="grid-item">
            <img src={notebook} alt="Prove Your Skills" />
            <h3>Prove your skills</h3>
            <p>
              Gain substantial experience by solving real-world problems and
              compete against others to come up with innovative solutions.
            </p>
          </div>
          <div className="grid-item">
            <img src={Vector} alt="Learn from Community" />
            <h3>Learn from community</h3>
            <p>
              Analyze the solutions submitted by other Data Scientists and learn
              from them.
            </p>
          </div>
          <div className="grid-item">
            <img src={Robot} alt="Challenge Yourself" />
            <h3>Challenge yourself</h3>
            <p>
              Participating in challenges is a fail-safe way to learn and
              improve your skills.
            </p>
          </div>
          <div className="grid-item">
            <img src={IdentificationCard} alt="Earn Recognition" />
            <h3>Earn recognition</h3>
            <p>
              Stand out from the crowd by excelling in AI challenges and earn
              rewards.
            </p>
          </div>
        </div>
      </div>

      <div className="explore-challenges">
        <h2>Explore Challenges</h2>
        <div className="search-filter">
          <input type="text" placeholder="Search" className="search-bar" />
          <div className="filter">
            <div className="filter-section">
              <button onClick={toggleDropdown} className="filter-toggle-button">
                Filter
              </button>
              {showDropdown && (
                <div className="filter-dropdown">
                  <h5 style={{ color: "black" }}>Status</h5>
                  <div className="filter-options">
                    <label>
                      <input
                        type="checkbox"
                        value="All"
                        checked={statusFilters.includes("All")}
                        onChange={handleStatusChange}
                      />{" "}
                      All
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        value="Active"
                        checked={statusFilters.includes("Active")}
                        onChange={handleStatusChange}
                      />{" "}
                      Active
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        value="Upcoming"
                        checked={statusFilters.includes("Upcoming")}
                        onChange={handleStatusChange}
                      />{" "}
                      Upcoming
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        value="Past"
                        checked={statusFilters.includes("Past")}
                        onChange={handleStatusChange}
                      />{" "}
                      Past
                    </label>
                  </div>

                  <h5 style={{ color: "black" }}>Level</h5>
                  <div className="filter-options">
                    <label>
                      <input
                        type="checkbox"
                        value="Easy"
                        checked={levelFilters.includes("Easy")}
                        onChange={handleLevelChange}
                      />{" "}
                      Easy
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        value="Medium"
                        checked={levelFilters.includes("Medium")}
                        onChange={handleLevelChange}
                      />{" "}
                      Medium
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        value="Hard"
                        checked={levelFilters.includes("Hard")}
                        onChange={handleLevelChange}
                      />{" "}
                      Hard
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="challenges-grid">
          {filteredChallenges.map((challenge, index) => (
            <div className="challenge-card" key={index}>
              <div className="card-image">
                <img src={challenge.image} alt={challenge.title} />
              </div>
              <div className="card-content">
                <span className={`status ${challenge?.status}`}>
                  {challenge.status}
                </span>
                <h5>{challenge.title}</h5>
                {challenge.startsIn && (
                  <p className="countdown">
                    <Timer
                      targetDate={challenge.startsIn}
                      endDate={challenge.endsIn}
                    />
                  </p>
                )}
                {challenge.endedOn && (
                  <p className="ended-on">
                    Ended on <br /> {challenge.endedOn}
                  </p>
                )}
                <Link
                  to={{
                    pathname: "/Hackathon",
                    state: { message: "state" },
                  }}
                  state={challenge}
                >
                  <button className="participate-button">
                    {challenge.buttonLabel}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
