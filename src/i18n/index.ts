export const languages = {
  da: 'Dansk',
  en: 'English',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'da';

export const translations = {
  da: {
    // Navigation
    'nav.services': 'Ydelser',
    'nav.team': 'Team', 
    'nav.clients': 'Kunder',
    'nav.contact': 'Kontakt',
    'nav.cta': 'Kontakt os',
    
    // Hero
    'hero.title': 'Vi gentænker måden, vi arbejder på. Med mennesker i centrum og teknologi som motor.',
    'hero.subtitle': 'Fra hverdagens rutiner til eksperimentere ekspertindsigter med AI for dine medarbejdere',
    'hero.cta': 'Kontakt',
    
    // Services section
    'services.title': 'Fra strategi til implementering',
    'services.subtitle': 'Vi leverer komplette AI-løsninger der passer til jeres specifikke behov og forretningmål.',
    
    // Contact
    'contact.title': 'Book et møde',
    'contact.welcome': 'Tøv ikke med at kontakte os. Vi er klar til at hjælpe dig med at omsætte AI til konkret værdi for din virksomhed.',
    'contact.name': 'Navn',
    'contact.email': 'E-mail',
    'contact.phone': 'Telefon',
    'contact.message': 'Besked',
    'contact.send': 'Send besked',
    'contact.success.title': 'Tak for din besked!',
    'contact.success.message': 'Vi vender tilbage til dig hurtigst muligt.',
    'contact.info.title': 'Kontakt information',
    'contact.info.email': 'hello@saiba.dk',
    'contact.info.phone': '+45 31 41 28 29',
    'contact.info.address': 'København, Danmark',
    
    // Partners
    'partners.title': 'Vores partnere',
    'partners.subtitle': 'Vi arbejder sammen med førende virksomheder om at implementere AI løsninger.',
    
    // Footer
    'footer.tagline': 'Vi gentænker måden, vi arbejder på.',
  },
  en: {
    // Navigation  
    'nav.services': 'Services',
    'nav.team': 'Team',
    'nav.clients': 'Clients', 
    'nav.contact': 'Contact',
    'nav.cta': 'Get in touch',
    
    // Hero
    'hero.title': 'We rethink the way we work. With people at the center and technology as the engine.',
    'hero.subtitle': 'From everyday routines to experimenting expert insights with AI for your employees',
    'hero.cta': 'Contact',
    
    // Services section
    'services.title': 'From strategy to implementation',
    'services.subtitle': 'We deliver complete AI solutions that fit your specific needs and business goals.',
    
    // Contact
    'contact.title': 'Book a meeting',
    'contact.welcome': 'Don\'t hesitate to contact us. We\'re ready to help you transform AI into concrete value for your business.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.message': 'Message', 
    'contact.send': 'Send message',
    'contact.success.title': 'Thank you for your message!',
    'contact.success.message': 'We will get back to you as soon as possible.',
    'contact.info.title': 'Contact information',
    'contact.info.email': 'hello@saiba.dk',
    'contact.info.phone': '+45 31 41 28 29',
    'contact.info.address': 'Copenhagen, Denmark',
    
    // Partners
    'partners.title': 'Our partners',
    'partners.subtitle': 'We work together with leading companies to implement AI solutions.',
    
    // Footer
    'footer.tagline': 'We rethink the way we work.',
  }
} as const;