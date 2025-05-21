import { useState } from 'react';
import { Home, DollarSign, Users, BedDouble, Building, Calendar } from 'lucide-react';

// Define color palette as per requirements
const colors = {
  orange: '#FF6500',
  darkBlue: '#1E3E62',
  deepBlue: '#0B192C',
  black: '#000000',
  white: '#FFFFFF'
};

// Custom CSS with modern design principles using the specified colors
const styles = {
  container: {
    fontFamily: 'Inter, system-ui, sans-serif',
    minHeight: '100vh',
    background: `linear-gradient(135deg, ${colors.deepBlue} 0%, ${colors.darkBlue} 100%)`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem 1rem'
  },
  wrapper: {
    maxWidth: '1100px',
    width: '100%'
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem'
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1rem'
  },
  title: {
    fontSize: '2.8rem',
    fontWeight: '700',
    color: colors.white,
    marginLeft: '0.75rem',
    textShadow: '0 2px 5px rgba(0, 0, 0, 0.3)'
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '1.125rem',
    maxWidth: '600px',
    margin: '0 auto'
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: '16px',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.25)',
    padding: '2.5rem',
    border: `1px solid ${colors.darkBlue}10`,
    overflow: 'hidden',
    position: 'relative'
  },
  cardAccent: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '6px',
    background: `linear-gradient(to right, ${colors.orange}, ${colors.darkBlue})`
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
    width: '100%',
    boxSizing: 'border-box'
  },
  formGroup: {
    marginBottom: '1.5rem',
    width: '100%'
  },
  label: {
    display: 'block',
    fontSize: '0.95rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: colors.darkBlue
  },
  inputWrapper: {
    position: 'relative',
    width: '100%'
  },
  inputIcon: {
    position: 'absolute',
    left: '1rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: colors.orange,
    zIndex: '1'
  },
  input: {
    width: '100%',
    padding: '0.9rem 1rem 0.9rem 2.75rem',
    borderRadius: '8px',
    border: `1px solid ${colors.darkBlue}30`,
    fontSize: '1rem',
    boxSizing: 'border-box',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.3s ease',
    backgroundColor: colors.white
  },
  button: {
    background: colors.orange,
    color: colors.white,
    border: 'none',
    borderRadius: '8px',
    padding: '0.9rem 2.5rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: `0 4px 12px ${colors.orange}80`,
    transition: 'all 0.3s ease'
  },
  buttonHover: {
    transform: 'translateY(-2px)',
    boxShadow: `0 6px 16px ${colors.orange}90`
  },
  buttonIcon: {
    marginRight: '0.75rem'
  },
  resultContainer: {
    marginTop: '2.5rem',
    textAlign: 'center'
  },
  resultCard: {
    background: `linear-gradient(135deg, ${colors.darkBlue} 0%, ${colors.deepBlue} 100%)`,
    borderRadius: '12px',
    display: 'inline-block',
    padding: '1.75rem 3rem',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    border: `1px solid ${colors.orange}30`,
    position: 'relative',
    overflow: 'hidden'
  },
  resultAccent: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '4px',
    background: colors.orange
  },
  resultTitle: {
    color: colors.white,
    fontSize: '1.125rem',
    fontWeight: '500',
    marginBottom: '0.75rem'
  },
  resultValue: {
    color: colors.white,
    fontSize: '2.5rem',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  resultIcon: {
    marginRight: '0.5rem',
    color: colors.orange
  },
  footer: {
    marginTop: '2.5rem',
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '0.875rem'
  },
  populationField: {
    gridColumn: '1 / -1'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2.5rem'
  },
  loadingSpinner: {
    animation: 'spin 1s linear infinite',
    marginRight: '0.75rem'
  }
};

function App() {
  const [formData, setFormData] = useState({
    income: '',
    age: '',
    rooms: '',
    bedrooms: '',
    population: ''
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate API call with timeout
      setTimeout(() => {
        const calculatedPrice = (
          parseFloat(formData.income) * 0.3 + 
          parseFloat(formData.age) * 5000 + 
          parseFloat(formData.rooms) * 25000 + 
          parseFloat(formData.bedrooms) * 10000 + 
          parseFloat(formData.population) * 0.05
        ).toFixed(2);
        
        setPrediction(calculatedPrice);
        setLoading(false);
      }, 1000);
    } catch (err) {
      console.error("Prediction failed:", err);
      setPrediction("Error");
      setLoading(false);
    }
  };

  // Helper function to render input fields with consistent styling
  const renderInputField = (name, placeholder, icon, label) => {
    return (
      <div style={styles.formGroup}>
        <label style={styles.label}>{label}</label>
        <div style={styles.inputWrapper}>
          <div style={styles.inputIcon}>
            {icon}
          </div>
          <input
            style={styles.input}
            type="number"
            name={name}
            placeholder={placeholder}
            value={formData[name]}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.logo}>
            <Home size={36} color="white" />
            <h1 style={styles.title}>HouseWorth</h1>
          </div>
          <p style={styles.subtitle}>
            House Price Prediction System (Predicts Using Regression model)
          </p>
        </div>
        
        {/* Main Card */}
        <div style={styles.card}>
          <div>
            <div style={styles.formGrid}>
              {renderInputField('income', 'e.g. 79545.45', <DollarSign size={18} color="#1e3c72" />, 'Average Area Income')}
              {renderInputField('age', 'e.g. 5.6', <Calendar size={18} color="#1e3c72" />, 'Average House Age (years)')}
              {renderInputField('rooms', 'e.g. 6.9', <Building size={18} color="#1e3c72" />, 'Average Number of Rooms')}
              {renderInputField('bedrooms', 'e.g. 3.5', <BedDouble size={18} color="#1e3c72" />, 'Average Number of Bedrooms')}
              
              <div style={styles.populationField}>
                {renderInputField('population', 'e.g. 23086.8', <Users size={18} color="#1e3c72" />, 'Average Area Population')}
              </div>
            </div>
            
            {/* Submit Button */}
            <div style={styles.buttonContainer}>
              <button 
                onClick={handleSubmit}
                style={styles.button}
                disabled={loading}
              >
                {loading ? 
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    <svg style={styles.loadingSpinner} width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" strokeDasharray="32" strokeDashoffset="8" />
                    </svg>
                    Processing...
                  </span> : 
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    <DollarSign size={18} style={styles.buttonIcon} />
                    Calculate Property Value
                  </span>
                }
              </button>
            </div>
          </div>
          
          {/* Result Display */}
          {prediction && (
            <div style={styles.resultContainer}>
              <div style={styles.resultCard}>
                <div style={styles.resultTitle}>Estimated Property Value</div>
                <div style={styles.resultValue}>
                  <DollarSign size={24} style={styles.resultIcon} />
                  {prediction !== "Error" ? parseFloat(prediction).toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  }) : "Error"}
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div style={styles.footer}>
          © 2025 PropVal | Advanced Property Valuation System
        </div>
      </div>
    </div>
  );
}

export default App;