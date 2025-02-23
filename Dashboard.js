// ... imports ...
import '../styles/global.css';

const Dashboard = () => {
  // ... existing logic ...

  return (
    <div className="dashboard">
      <h2>Welcome back, {user?.name}</h2>
      <h3>Your Time Capsules</h3>
      <div className="capsule-grid">
        {capsules.map((capsule) => (
          <div className="capsule-card" key={capsule._id}>
            <h4>{capsule.title}</h4>
            <p>📅 Unlocks on: {new Date(capsule.unlockDate).toLocaleDateString()}</p>
            <p>{capsule.isLocked ? '🔒 Locked' : '🔓 Open'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};