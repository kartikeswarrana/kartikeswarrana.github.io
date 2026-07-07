document.addEventListener('DOMContentLoaded', () => {

  // ----------------------------------------------------
  // 1. DATA DEFINITIONS
  // ----------------------------------------------------

  // Polaroid memories configuration (26 images)
  const memories = [
    { id: 1, orientation: 'portrait', caption: 'The Day We Met', note: 'I will never forget the exact second I first saw you. Everything in the room faded into the background, and my heart instantly knew you were special.' },
    { id: 2, orientation: 'portrait', caption: 'Your Beautiful Smile', note: 'Your laugh is my absolute favorite sound in the world. It washes away all my worries and fills my soul with pure sunshine.' },
    { id: 3, orientation: 'landscape', caption: 'First Date Coffee', note: 'A simple coffee date, yet it felt like the start of the greatest adventure of our lives. We talked for hours, lost in our own little world.' },
    { id: 4, orientation: 'portrait', caption: 'Lost in Your Eyes', note: 'I look at you and see everything I\'ve ever hoped for. Your eyes carry a quiet strength and a depth of love that inspires me daily.' },
    { id: 5, orientation: 'landscape', caption: 'Chasing Sunsets', note: 'Watching the sky paint itself in shades of orange and pink, holding you close. There is no other place I\'d rather be.' },
    { id: 6, orientation: 'landscape', caption: 'Road Trip Singalongs', note: 'Belted out our favorite songs completely out of tune, driving down empty roads. With you, even the simplest road trip is a party.' },
    { id: 7, orientation: 'landscape', caption: 'Laughing Till It Hurts', note: 'My favorite moments are the ones where we laugh so hard our stomachs hurt. Thank you for making my life so incredibly happy.' },
    { id: 8, orientation: 'landscape', caption: 'Under the Warm Sun', note: 'A lazy afternoon soaking up the warmth of the sun and the comfort of your presence. In your arms, I have found my home.' },
    { id: 9, orientation: 'landscape', caption: 'Late Night Walks', note: 'Walking hand in hand through the quiet streets, sharing our deepest thoughts under the glow of streetlights. I cherish these long talks.' },
    { id: 10, orientation: 'landscape', caption: 'Silly Selfie Faces', note: 'I love that we can be completely silly and goofy together. There\'s no pretense, just two kids deeply in love.' },
    { id: 11, orientation: 'portrait', caption: 'Snuggled Up Cozy', note: 'Cozy rainy afternoons, wrapped in a warm blanket, talking about everything and nothing. These peaceful moments are priceless to me.' },
    { id: 12, orientation: 'portrait', caption: 'Absolutely Stunning', note: 'Sometimes I catch myself just staring at you in complete awe. You are beautiful inside and out, and I am the luckiest person alive.' },
    { id: 13, orientation: 'landscape', caption: 'Dancing in the Rain', note: 'We don\'t wait for the storms to pass; we learn to dance in the rain. I know we can get through absolutely anything together.' },
    { id: 14, orientation: 'landscape', caption: 'My Favorite View', note: 'I\'ve seen the most beautiful sights in the world, but my absolute favorite view will always be looking at you.' },
    { id: 15, orientation: 'portrait', caption: 'Making Sweet Wishes', note: 'Standing side by side, making silent wishes together. My wish has already come true, because I have you.' },
    { id: 16, orientation: 'portrait', caption: 'Starry Night Confessions', note: 'Under the vast starry sky, sharing secrets and dreaming about the future. I promise to stand by your side forever.' },
    { id: 17, orientation: 'portrait', caption: 'Warm Winter Hugs', note: 'The cold winter air has nothing on the warmth of your embrace. You are my cozy sanctuary in any season.' },
    { id: 18, orientation: 'portrait', caption: 'Everyday Moments', note: 'Even when we are doing nothing at all, just sitting near each other, it feels like the most meaningful part of my day.' },
    { id: 19, orientation: 'portrait', caption: 'My Whole Heart', note: 'You hold my heart in your hands, and I trust you with it completely. Thank you for loving me so gently.' },
    { id: 20, orientation: 'landscape', caption: 'Exploring New Places', note: 'Traveling the world, discovering new spots, and capturing memories. Every destination is magical when I\'m sharing it with you.' },
    { id: 21, orientation: 'landscape', caption: 'Valentine\'s Day Dinner', note: 'Celebrating us. Not just on Valentine\'s, but every single day, because you make every day feel like a special occasion.' },
    { id: 22, orientation: 'landscape', caption: 'Dreaming Out Loud', note: 'Sharing our wildest dreams, our fears, and our hopes. Building a life with you is a dream come true.' },
    { id: 23, orientation: 'portrait', caption: 'A Spark that Never Fades', note: 'That initial spark we felt has grown into a steady, warm, and beautiful flame. It grows stronger with every passing day.' },
    { id: 24, orientation: 'portrait', caption: 'Captured in Time', note: 'Looking at this photo brings back all the feelings of that perfect day. I will hold this memory close to my heart forever.' },
    { id: 25, orientation: 'portrait', caption: 'My Forever Love', note: 'You are my lover, my best friend, and my soulmate. I choose you today, tomorrow, and for the rest of my days.' },
    { id: 26, orientation: 'portrait', caption: 'The Best is Yet to Come', note: 'As we celebrate your birthday today, I am filled with excitement for all the beautiful chapters we have yet to write. The best is yet to come!' }
  ];

  // Love letter text
  const letterText = `My Dearest,

Happy Birthday! 

Today is all about celebrating the most wonderful person in my life. Every single day with you feels like a gift. You bring so much light, laughter, and warmth into my world, and I cannot imagine a single day without your beautiful smile.

Looking back at our photos, I realize how incredibly blessed I am. We have created so many beautiful memories, and yet, I know this is only the beginning. 

Thank you for being my partner, my best friend, and my biggest support. I promise to hold your hand through everything life brings our way.

I hope this little website brings a smile to your face. Enjoy your day, make a big wish, and remember that you are loved beyond measure.

Forever & Always,
Me ❤️`;

  // Reasons I love you list
  const loveReasons = [
    { icon: '❤️', num: 'Reason 01', text: 'How your hand fits perfectly in mine, making me feel completely safe and home.' },
    { icon: '🌟', num: 'Reason 02', text: 'The way your eyes light up whenever you are excited about the smallest things.' },
    { icon: '😊', num: 'Reason 03', text: 'Your incredible kindness and how you make everyone around you feel warm and valued.' },
    { icon: '💫', num: 'Reason 04', text: 'How you can make me laugh even when I am having the hardest day.' },
    { icon: '🎵', num: 'Reason 05', text: 'Our late-night conversations about everything, from silly dreams to deep space.' },
    { icon: '🥰', num: 'Reason 06', text: 'The gentle, reassuring way you hug me when you know I need it.' },
    { icon: '🌸', num: 'Reason 07', text: 'Your passion and determination. Watching you pursue your goals inspires me daily.' },
    { icon: '✨', num: 'Reason 08', text: 'How supportive you are of my dreams, always being my number one cheerleader.' },
    { icon: '☕', num: 'Reason 09', text: 'The sweet, silent moments we share just sitting together, reading or enjoying coffee.' },
    { icon: '🎈', num: 'Reason 10', text: 'Simply because being with you makes me a better, happier person every day.' }
  ];

  // ----------------------------------------------------
  // 2. BACKGROUND PARTICLE SYSTEM (Canvas)
  // ----------------------------------------------------
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class Particle {
    constructor() {
      this.reset();
      this.y = Math.random() * canvas.height; // Distribute vertically initially
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height + Math.random() * 20;
      this.size = Math.random() * 8 + 4;
      this.speedY = Math.random() * 1 + 0.5;
      this.speedX = Math.sin(Math.random() * 5) * 0.4;
      this.opacity = Math.random() * 0.5 + 0.2;
      this.type = Math.random() > 0.45 ? 'heart' : 'sparkle';
      this.color = Math.random() > 0.5 ? '#ff527b' : '#fd79a8';
      this.angle = Math.random() * Math.PI;
    }

    update() {
      this.y -= this.speedY;
      this.x += this.speedX;
      this.angle += 0.01;

      // Wrap around screen or fade out
      if (this.y < -10 || this.opacity <= 0) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = this.color;

      if (this.type === 'heart') {
        // Draw Heart
        ctx.beginPath();
        const d = this.size;
        ctx.translate(this.x, this.y);
        ctx.rotate(Math.sin(this.angle) * 0.1);
        ctx.moveTo(0, -d / 4);
        ctx.quadraticCurveTo(-d / 2, -d, -d, -d / 2);
        ctx.quadraticCurveTo(-d, d / 4, 0, d);
        ctx.quadraticCurveTo(d, d / 4, d, -d / 2);
        ctx.quadraticCurveTo(d / 2, -d, 0, -d / 4);
        ctx.fill();
      } else {
        // Draw Sparkle (Diamond Star)
        ctx.beginPath();
        ctx.translate(this.x, this.y);
        ctx.moveTo(0, -this.size);
        ctx.lineTo(this.size/2, 0);
        ctx.lineTo(0, this.size);
        ctx.lineTo(-this.size/2, 0);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();
    }
  }

  function initParticles() {
    particles = [];
    const count = Math.min(60, Math.floor(window.innerWidth / 20));
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }
  initParticles();

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animateParticles);
  }
  animateParticles();

  // ----------------------------------------------------
  // 3. MUSIC AND INTRO TRANSITIONS
  // ----------------------------------------------------
  const bgMusic = document.getElementById('bg-music');
  const audioToggle = document.getElementById('audio-toggle');
  const introOverlay = document.getElementById('intro-overlay');
  const giftBox = document.getElementById('gift-box');

  let isMusicPlaying = false;

  function toggleMusic(forcePlay = null) {
    const play = forcePlay !== null ? forcePlay : bgMusic.paused;
    if (play) {
      bgMusic.play().then(() => {
        isMusicPlaying = true;
        audioToggle.classList.add('playing');
      }).catch(err => {
        console.log("Audio autoplay blocked by browser policy.", err);
      });
    } else {
      bgMusic.pause();
      isMusicPlaying = false;
      audioToggle.classList.remove('playing');
    }
  }

  audioToggle.addEventListener('click', () => toggleMusic());

  // Click on the gift box to unlock the site
  giftBox.addEventListener('click', () => {
    introOverlay.classList.add('hidden');
    // Start music
    toggleMusic(true);
    
    // Quick delay trigger for scroll reveal on hero section elements
    setTimeout(() => {
      document.body.style.overflowY = 'auto';
    }, 1000);
  });

  // Ensure scrolling is disabled initially until intro is closed
  document.body.style.overflowY = 'hidden';

  // ----------------------------------------------------
  // 4. TYPEWRITER LOVE LETTER
  // ----------------------------------------------------
  const envelope = document.getElementById('envelope');
  const typedTextElement = document.getElementById('typed-text');
  const typewriterCursor = document.getElementById('typewriter-cursor');
  let hasTyped = false;

  function typeWriter(text, index) {
    if (index < text.length) {
      typedTextElement.textContent += text.charAt(index);
      
      // Auto-scroll the letter box as it types
      const letterContent = document.getElementById('letter-content');
      letterContent.scrollTop = letterContent.scrollHeight;

      setTimeout(() => typeWriter(text, index + 1), 40);
    } else {
      typewriterCursor.style.display = 'none';
    }
  }

  envelope.addEventListener('click', () => {
    if (!envelope.classList.contains('open')) {
      envelope.classList.add('open');
      
      // Prevent letter closing immediately on click inside envelope
      if (!hasTyped) {
        hasTyped = true;
        setTimeout(() => {
          typeWriter(letterText, 0);
        }, 800);
      }
    }
  });

  // ----------------------------------------------------
  // 5. GENERATE POLAROID MEMORIES GRID & LIGHTBOX
  // ----------------------------------------------------
  const polaroidGrid = document.getElementById('polaroid-grid');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxNote = document.getElementById('lightbox-note');
  const lightboxClose = document.getElementById('lightbox-close');

  function renderPolaroids() {
    memories.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('polaroid-card');
      
      // Apply a random romantic tilt between -6 and +6 degrees
      const tilt = (Math.random() * 12 - 6).toFixed(1);
      card.style.transform = `rotate(${tilt}deg)`;

      // Image Container
      const imgContainer = document.createElement('div');
      imgContainer.classList.add('polaroid-img-container', item.orientation);

      // Main image
      const img = document.createElement('img');
      img.classList.add('polaroid-img');
      img.src = `images_optimized/${item.id}.webp`;
      img.alt = item.caption;
      img.loading = 'lazy'; // Lazy load for extreme performance

      imgContainer.appendChild(img);

      // Caption
      const caption = document.createElement('div');
      caption.classList.add('polaroid-caption');
      caption.textContent = item.caption;

      card.appendChild(imgContainer);
      card.appendChild(caption);

      // Click to open Lightbox Modal
      card.addEventListener('click', () => {
        lightboxImg.src = `images_optimized/${item.id}.webp`;
        lightboxNote.textContent = item.note;
        lightbox.classList.add('active');
      });

      polaroidGrid.appendChild(card);
    });
  }
  renderPolaroids();

  // Lightbox close handler
  lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
    }
  });

  // ----------------------------------------------------
  // 6. LOVE CAROUSEL SYSTEM (Reasons Card Swipe)
  // ----------------------------------------------------
  const carouselContainer = document.getElementById('carousel-cards');
  const prevBtn = document.getElementById('prev-card');
  const nextBtn = document.getElementById('next-card');
  let currentCardIndex = 0;

  function renderCarousel() {
    loveReasons.forEach((item, index) => {
      const card = document.createElement('div');
      card.classList.add('carousel-card');

      card.innerHTML = `
        <div class="carousel-card-icon">${item.icon}</div>
        <div class="carousel-card-num">${item.num}</div>
        <p class="carousel-card-text">"${item.text}"</p>
      `;

      carouselContainer.appendChild(card);
    });
    updateCarousel();
  }

  function updateCarousel() {
    const cards = document.querySelectorAll('.carousel-card');
    cards.forEach((card, index) => {
      // Calculate offset index relative to current
      const offset = index - currentCardIndex;
      
      if (offset === 0) {
        // Active card
        card.style.transform = 'translateZ(0px) rotateY(0deg) scale(1)';
        card.style.opacity = '1';
        card.style.zIndex = '3';
        card.style.pointerEvents = 'auto';
      } else if (offset === 1) {
        // Next card (peek behind right)
        card.style.transform = 'translateX(60px) translateZ(-80px) rotateY(-15deg) scale(0.9)';
        card.style.opacity = '0.6';
        card.style.zIndex = '2';
        card.style.pointerEvents = 'none';
      } else if (offset === -1) {
        // Prev card (peek behind left)
        card.style.transform = 'translateX(-60px) translateZ(-80px) rotateY(15deg) scale(0.9)';
        card.style.opacity = '0.6';
        card.style.zIndex = '2';
        card.style.pointerEvents = 'none';
      } else {
        // Hidden cards
        card.style.transform = `translateX(${offset * 120}px) translateZ(-200px) scale(0.7)`;
        card.style.opacity = '0';
        card.style.zIndex = '0';
        card.style.pointerEvents = 'none';
      }
    });
  }

  nextBtn.addEventListener('click', () => {
    if (currentCardIndex < loveReasons.length - 1) {
      currentCardIndex++;
      updateCarousel();
    } else {
      // Loop back to start
      currentCardIndex = 0;
      updateCarousel();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentCardIndex > 0) {
      currentCardIndex--;
      updateCarousel();
    } else {
      // Loop back to end
      currentCardIndex = loveReasons.length - 1;
      updateCarousel();
    }
  });

  renderCarousel();

  // ----------------------------------------------------
  // 7. VIRTUAL BIRTHDAY CAKE & CONFETTI SURPRISE
  // ----------------------------------------------------
  const flames = [
    document.getElementById('flame-1'),
    document.getElementById('flame-2'),
    document.getElementById('flame-3')
  ];
  const blowHint = document.getElementById('blow-hint');
  const wishCard = document.getElementById('wish-card');
  let blownCount = 0;

  flames.forEach(flame => {
    flame.addEventListener('click', () => {
      if (!flame.classList.contains('blown-out')) {
        flame.classList.add('blown-out');
        blownCount++;

        // Trigger small burst of sparks
        triggerSparkBurst(flame.getBoundingClientRect());

        if (blownCount === 3) {
          // All candles blown out!
          blowHint.textContent = "Make a beautiful wish! ❤️";
          blowHint.style.color = '#ff527b';
          
          // Confetti explosion
          triggerConfettiSurprise();
          
          // Reveal wish card with delay
          setTimeout(() => {
            wishCard.classList.add('visible');
            wishCard.scrollIntoView({ behavior: 'smooth' });
          }, 800);
        }
      }
    });
  });

  // Mini sparkle burst on candle tap
  function triggerSparkBurst(rect) {
    const burstCount = 15;
    for (let i = 0; i < burstCount; i++) {
      const p = new Particle();
      p.x = rect.left + rect.width / 2 + window.scrollX;
      p.y = rect.top + window.scrollY;
      p.size = Math.random() * 6 + 3;
      p.speedY = Math.random() * -3 - 1;
      p.speedX = (Math.random() * 4 - 2);
      p.opacity = 1;
      p.color = '#ffd32a';
      p.type = 'sparkle';
      particles.push(p);
    }
  }

  // Giant confetti explosion
  function triggerConfettiSurprise() {
    const confettiColors = ['#ff527b', '#ff793f', '#ffb142', '#33d9b2', '#34ace0', '#ffda79', '#706fd3'];
    const count = 150;
    
    for (let i = 0; i < count; i++) {
      const p = new Particle();
      p.x = canvas.width / 2 + (Math.random() * 100 - 50);
      p.y = canvas.height * 0.7; // Start around cake height
      p.size = Math.random() * 8 + 5;
      p.speedY = Math.random() * -12 - 5; // Launch upwards
      p.speedX = (Math.random() * 14 - 7); // Wide spread
      p.opacity = 1.0;
      p.color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
      p.type = 'heart'; // Use hearts as confetti particles
      p.angle = Math.random() * Math.PI * 2;
      
      // Override particle update to add gravity
      const originalUpdate = p.update;
      p.update = function() {
        this.speedY += 0.2; // Add gravity
        this.y += this.speedY;
        this.x += this.speedX;
        this.angle += 0.05;
        this.opacity -= 0.005; // Fade out slowly
        
        if (this.y > canvas.height || this.opacity <= 0) {
          // Remove from array instead of resetting
          const idx = particles.indexOf(this);
          if (idx > -1) particles.splice(idx, 1);
        }
      };
      
      particles.push(p);
    }
  }

  // ----------------------------------------------------
  // 8. INTERACTIVE SWEET SURPRISE CARDS
  // ----------------------------------------------------
  const surpriseCards = document.querySelectorAll('.surprise-card');
  const resetBtn = document.getElementById('reset-surprises');

  surpriseCards.forEach(card => {
    card.addEventListener('click', () => {
      // If it's already flipped, do nothing (we want them to stay open until reset)
      if (!card.classList.contains('flipped')) {
        card.classList.add('flipped');
        
        // Trigger a cute spark/heart burst at the card location
        const rect = card.getBoundingClientRect();
        triggerSparkBurst(rect);
        
        // After a small delay, trigger extra confetti/hearts for extra romance!
        setTimeout(() => {
          triggerCardConfetti(rect);
        }, 150);
      }
    });
  });

  // Unique confetti explosion for specific card flip
  function triggerCardConfetti(rect) {
    const cardColors = ['#ff527b', '#fd79a8', '#ffeaa7', '#e5b858'];
    const count = 25;
    
    for (let i = 0; i < count; i++) {
      const p = new Particle();
      // Center the particles on the flipped card
      p.x = rect.left + rect.width / 2 + window.scrollX;
      p.y = rect.top + rect.height / 2 + window.scrollY;
      p.size = Math.random() * 8 + 4;
      p.speedY = Math.random() * -6 - 2; // Launch slightly upwards
      p.speedX = (Math.random() * 8 - 4); // Spread horizontally
      p.opacity = 1.0;
      p.color = cardColors[Math.floor(Math.random() * cardColors.length)];
      p.type = 'heart';
      p.angle = Math.random() * Math.PI * 2;
      
      // Custom update behavior with soft gravity for card confetti
      p.update = function() {
        this.speedY += 0.15; // Soft gravity
        this.y += this.speedY;
        this.x += this.speedX;
        this.angle += 0.04;
        this.opacity -= 0.01; // Fade out slightly faster
        
        if (this.y > canvas.height || this.opacity <= 0) {
          const idx = particles.indexOf(this);
          if (idx > -1) particles.splice(idx, 1);
        }
      };
      
      particles.push(p);
    }
  }

  // Reset button logic to flip all cards back
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      surpriseCards.forEach(card => {
        card.classList.remove('flipped');
      });
      
      // Trigger a small reset sparkle burst on the reset button itself
      const btnRect = resetBtn.getBoundingClientRect();
      triggerSparkBurst(btnRect);
    });
  }

});
