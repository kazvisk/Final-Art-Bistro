import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Reviews data
  const reviews = [
    {
      text: "The Art Bistro is my favorite place to work and relax. The coffee is exceptional, and the artistic atmosphere is truly inspiring. I love how they showcase local artists!",
      author: "Sarah M., Local Artist",
      rating: "★★★★★"
    },
    {
      text: "Amazing coffee and such a creative environment! The baristas are knowledgeable and the pastries are freshly made daily. It's become my go-to spot for meetings.",
      author: "Michael R., Entrepreneur",
      rating: "★★★★★"
    },
    {
      text: "What a gem! The atmosphere is perfect for studying, and their specialty drinks are incredible. The rotating art exhibitions keep it fresh and interesting every visit.",
      author: "Emma L., Graduate Student",
      rating: "★★★★★"
    }
  ];

  const [currentReview, setCurrentReview] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5' }}>
      {/* Simple Text Navigation - Always visible */}
      <nav style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'bold', 
          color: 'white', 
          textDecoration: 'none',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
        }}>
          The Art Bistro
        </Link>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link to="/" style={{ 
            color: 'white', 
            textDecoration: 'none', 
            fontWeight: '500',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
          }}>Home</Link>
          <Link to="/" style={{ 
            color: 'white', 
            textDecoration: 'none', 
            fontWeight: '500',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
          }}>About Us</Link>
          <Link to="/menu" style={{ 
            color: 'white', 
            textDecoration: 'none', 
            fontWeight: '500',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
          }}>Menu</Link>
          <span style={{ 
            color: 'white', 
            fontWeight: '500', 
            cursor: 'pointer',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
          }}>Contact</span>
          <Link to="/menu" style={{ 
            backgroundColor: 'white',
            color: '#d2691e',
            padding: '0.5rem 1rem',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
            fontSize: '0.9rem'
          }}>
            Explore Menu
          </Link>
        </div>
      </nav>

      {/* Scrolled Navigation - Only visible when scrolled */}
      {isScrolled && (
        <nav style={{ 
          backgroundColor: 'white', 
          padding: '1rem', 
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 101,
          animation: 'slideDown 0.3s ease'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to="/" style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              color: '#d2691e', 
              textDecoration: 'none'
            }}>
              The Art Bistro
            </Link>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <Link to="/" style={{ 
                color: '#333', 
                textDecoration: 'none', 
                fontWeight: '500'
              }}>Home</Link>
              <Link to="/" style={{ 
                color: '#333', 
                textDecoration: 'none', 
                fontWeight: '500'
              }}>About Us</Link>
              <Link to="/menu" style={{ 
                color: '#333', 
                textDecoration: 'none', 
                fontWeight: '500'
              }}>Menu</Link>
              <span style={{ 
                color: '#333', 
                fontWeight: '500', 
                cursor: 'pointer'
              }}>Contact</span>
            </div>
          </div>
        </nav>
      )}

      {/* Hero Section */}
      <section style={{ 
        height: '100vh', 
        backgroundImage: 'url(/coffee-hero.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          backgroundColor: 'rgba(0,0,0,0.3)' 
        }}></div>
        <div style={{ 
          position: 'relative', 
          zIndex: 10, 
          textAlign: 'center', 
          color: 'white',
          padding: '2rem',
          maxWidth: '800px'
        }}>
          <h1 style={{ 
            fontSize: '3rem', 
            marginBottom: '1rem',
            fontWeight: 'bold'
          }}>
            Welcome to The Art Bistro
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '2rem',
            opacity: 0.9
          }}>
            Where creativity meets comfort in the heart of San Francisco
          </p>
          <Link to="/menu" style={{ 
            display: 'inline-block',
            backgroundColor: 'white',
            color: '#d2691e',
            padding: '1rem 2rem',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
            fontSize: '1.1rem'
          }}>
            Explore Our Menu
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section style={{ padding: '4rem 2rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              marginBottom: '1rem',
              color: '#333'
            }}>
              Our Creative Haven
            </h2>
            <div style={{ 
              width: '60px', 
              height: '3px', 
              backgroundColor: '#d2691e', 
              margin: '0 auto 1rem auto' 
            }}></div>
            <p style={{ 
              fontSize: '1.1rem', 
              color: '#666',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Art Bistro is a vibrant coffee shop in the heart of San Francisco where creativity meets comfort. 
              We celebrate the artistic spirit of our city with handcrafted coffee, locally-sourced ingredients, 
              and a space that inspires. From our signature pour-over coffee to our artisanal pastries, 
              every detail is crafted with passion and purpose.
            </p>
          </div>
          
          {/* Features Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            <div style={{ 
              textAlign: 'center', 
              padding: '2rem', 
              backgroundColor: '#f9f9f9',
              borderRadius: '10px'
            }}>
              <div style={{ 
                fontSize: '2rem', 
                marginBottom: '1rem' 
              }}>☕</div>
              <h3 style={{ 
                fontSize: '1.3rem', 
                marginBottom: '1rem',
                color: '#333'
              }}>Fresh Daily</h3>
              <p style={{ 
                color: '#666',
                lineHeight: '1.5'
              }}>
                Our pastries and coffee are crafted fresh every morning with the finest ingredients.
              </p>
            </div>
            <div style={{ 
              textAlign: 'center', 
              padding: '2rem', 
              backgroundColor: '#f9f9f9',
              borderRadius: '10px'
            }}>
              <div style={{ 
                fontSize: '2rem', 
                marginBottom: '1rem' 
              }}>🎨</div>
              <h3 style={{ 
                fontSize: '1.3rem', 
                marginBottom: '1rem',
                color: '#333'
              }}>Local Artists</h3>
              <p style={{ 
                color: '#666',
                lineHeight: '1.5'
              }}>
                We showcase rotating exhibitions from talented local artists in our community.
              </p>
            </div>
            <div style={{ 
              textAlign: 'center', 
              padding: '2rem', 
              backgroundColor: '#f9f9f9',
              borderRadius: '10px'
            }}>
              <div style={{ 
                fontSize: '2rem', 
                marginBottom: '1rem' 
              }}>👥</div>
              <h3 style={{ 
                fontSize: '1.3rem', 
                marginBottom: '1rem',
                color: '#333'
              }}>Community</h3>
              <p style={{ 
                color: '#666',
                lineHeight: '1.5'
              }}>
                Join our community of artists, writers, and coffee enthusiasts in this cozy corner of creativity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#f5f5f5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              marginBottom: '1rem',
              color: '#333'
            }}>
              Our Collection
            </h2>
            <div style={{ 
              width: '60px', 
              height: '3px', 
              backgroundColor: '#d2691e', 
              margin: '0 auto 1rem auto' 
            }}></div>
            <p style={{ 
              fontSize: '1.1rem', 
              color: '#666'
            }}>
              Discover our handcrafted coffee and artisanal treats
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '1.5rem' 
          }}>
            <div style={{ 
              backgroundColor: 'white',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <img src="/artonwall.jpg" alt="Art on wall" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            </div>
            <div style={{ 
              backgroundColor: 'white',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <img src="/infocuscoffee.jpg" alt="In focus coffee" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            </div>
            <div style={{ 
              backgroundColor: 'white',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <img src="/sandosanddrinkmaybeport.jpg" alt="Sandwiches and drink" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            </div>
            <div style={{ 
              backgroundColor: 'white',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <img src="/drinkandflowersontable.jpg" alt="Drink and flowers on table" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            </div>
            <div style={{ 
              backgroundColor: 'white',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <img src="/burgersandbobaontable.jpg" alt="Burgers and boba on table" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            </div>
            <div style={{ 
              backgroundColor: 'white',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <img src="/bussinsaladandsando.jpg" alt="Salad and sandwich" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section style={{ padding: '4rem 2rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              marginBottom: '1rem',
              color: '#333'
            }}>
              What Our Customers Say
            </h2>
            <div style={{ 
              width: '60px', 
              height: '3px', 
              backgroundColor: '#d2691e', 
              margin: '0 auto 1rem auto' 
            }}></div>
            <p style={{ 
              fontSize: '1.1rem', 
              color: '#666'
            }}>
              Hear from our community of coffee lovers and artists
            </p>
          </div>
          
          <div style={{ 
            backgroundColor: '#f9f9f9',
            borderRadius: '15px',
            padding: '3rem',
            textAlign: 'center'
          }}>
            <div style={{ 
              fontSize: '3rem', 
              color: '#d2691e',
              marginBottom: '1rem'
            }}>"</div>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#333',
              marginBottom: '2rem',
              lineHeight: '1.6',
              fontStyle: 'italic'
            }}>
              "{reviews[currentReview].text}"
            </p>
            <div style={{ 
              fontSize: '1.5rem', 
              color: '#d2691e',
              marginBottom: '1rem'
            }}>
              {reviews[currentReview].rating}
            </div>
            <p style={{ 
              fontSize: '1.1rem',
              fontWeight: 'bold',
              color: '#333'
            }}>
              - {reviews[currentReview].author}
            </p>
            
            {/* Navigation */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '1rem',
              marginTop: '2rem'
            }}>
              <button 
                onClick={prevReview}
                style={{ 
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#d2691e',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  fontSize: '1.2rem'
                }}
              >
                ←
              </button>
              
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      border: 'none',
                      cursor: 'pointer',
                      backgroundColor: index === currentReview ? '#d2691e' : '#ccc'
                    }}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextReview}
                style={{ 
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#d2691e',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  fontSize: '1.2rem'
                }}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        backgroundColor: '#333', 
        color: 'white', 
        padding: '3rem 2rem' 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {/* Logo */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                backgroundColor: '#d2691e',
                width: '200px',
                height: '200px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto'
              }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Art Bistro Logo</div>
              </div>
            </div>
            
            {/* Location & Hours */}
            <div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Location & Hours</h3>
              <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Visit Us</h4>
                <p style={{ color: '#ccc', lineHeight: '1.5' }}>
                  2960 Clement St, San Francisco CA 94121<br/>
                  (415) 379-7119
                </p>
              </div>
              <div>
                <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Store Hours</h4>
                <p style={{ color: '#ccc' }}>
                  Monday-Sunday 8:00 AM - 5:00 PM
                </p>
              </div>
            </div>
            
            {/* More Information */}
            <div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>More Information</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <Link to="/" style={{ color: '#ccc', textDecoration: 'none' }}>Our Story</Link>
                <Link to="/menu" style={{ color: '#ccc', textDecoration: 'none' }}>Our Menu</Link>
                <span style={{ color: '#ccc' }}>Contact</span>
              </div>
            </div>
          </div>
          
          <div style={{ 
            borderTop: '1px solid #555', 
            paddingTop: '2rem', 
            textAlign: 'center' 
          }}>
            <p style={{ color: '#ccc' }}>
              Copyright © 2025 <span style={{ color: '#d2691e' }}>Art Bistro</span>.
            </p>
          </div>
        </div>
      </footer>

      <style>
        {`
          @keyframes slideDown {
            from {
              transform: translateY(-100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home; 