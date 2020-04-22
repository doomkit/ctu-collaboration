const sessionLocale = sessionStorage.getItem('locale');
export const locale = sessionLocale ? sessionLocale : 'en'; // or 'cz'
export const messages = {
  en: {
    navbar: {
      home: 'Home',
      test: 'Test',
      statistics: 'Statistics',
      about: 'About'
    },
    footer: {
      university: 'University',
      cvut: {
        university: 'CZECH TECHNICAL UNIVERSITY IN PRAGUE',
        faculty: 'Faculty of Electrical Engineering',
        address: 'Technická 2, 166 27, Praha 6 - Dejvice'
      },
      contacts: 'Contact the author',
      links: 'Links'
    },
    home: {
      welcome: {
        title: 'University-Buiseness Collaboration Guide',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illo, magnam consequuntur earum dicta molestiae animi nemo voluptatum doloribus accusamus libero maxime laborum mollitia soluta laudantium dolorem a expedita ipsam?',
        button: 'Test',
        alternative_text: 'Or explore the ',
        alternative_link: 'statistics of previous results '
      },
      section: {
        title: 'What is University-Buisienss Collaboration?',
        p1:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis nibh eget semper aliquet. Sed at malesuada neque. Morbi volutpat turpis sed convallis mollis. Mauris tincidunt tincidunt ornare. Maecenas non purus nisi. Sed gravida nibh eu odio lobortis malesuada.',
        p2:
          'Nunc suscipit diam ut ante fermentum vulputate. Fusce lectus justo, aliquet a porttitor eu, lacinia sed neque. Mauris feugiat vestibulum lorem ut volutpat. Donec eget sem feugiat, luctus felis et, lacinia augue.',
        p3:
          'Integer id posuere erat, at volutpat ante. Donec non lectus in nibh egestas facilisis porta et sapien.',
        more: 'Learn more'
      }
    },
    test: {
      question: 'Question №',
      thanks: 'Thank you for your time!',
      link_text: 'You can find your results',
      here: 'here'
    },
    results: {},
    about: {
      title: 'About project',
      text_1: "This application represents a part of the Bachelor's thesis",
      text_2:
        'The purpose of this application is to analyze how well the company is ready for cooperation and find the most suitable type of cooperation with the faculty.',
      work: 'Cooperation between universities and industry',
      author: 'Author',
      contacts: 'Contact information',
      source: 'Source code',
      cooperation: 'Cooperation with companies',
      public: 'Public relations office'
    },
    statistics: {
      profile: 'Average collaboration profile',
      avg_duration: 'Average test duration',
      completed: 'Tests completed',
      last: 'Last test completed',
      duration: 'Durations longer than 60min are ignored',
      types: 'The most common types of cooperation',
      score: 'Average readiness for cooperation',
      params: {
        communication: 'communication',
        experience: 'experience',
        expectations: 'expectations',
        knowledge: 'knowledge',
        people: 'people',
        resources: 'resources',
        specificity: 'specificity'
      }
    }
  },
  cz: {
    navbar: {
      home: 'Úvod',
      test: 'Test',
      statistics: 'Statistika',
      about: 'O projektu'
    },
    footer: {
      university: 'Univerzita',
      cvut: {
        university: 'ČESKÉ VYSOKÉ UČENÍ TECHNICKÉ V PRAZE',
        faculty: 'Fakulta elektrotechnická',
        address: 'Technická 2, 166 27, Praha 6 - Dejvice'
      },
      contacts: 'Kontaktovat autora',
      links: 'Odkazy'
    },
    home: {
      welcome: {
        title: 'Průvodce Spoluprací Univerzity s Průmyslem',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illo, magnam consequuntur earum dicta molestiae animi nemo voluptatum doloribus accusamus libero maxime laborum mollitia soluta laudantium dolorem a expedita ipsam?',
        button: 'Test',
        alternative_text: 'Nebo prozkoumejte ',
        alternative_link: 'statistiky předchozích výsledků'
      },
      footer: {
        cvut: {
          university: 'CZECH TECHNICAL UNIVERSITY IN PRAGUE',
          faculty: 'Faculty of Electrical Engineering',
          address: 'Technická 2, 166 27, Praha 6 - Dejvice'
        },
        contacts: 'Contacts',
        links: 'Links'
      },
      section: {
        title: 'What is University-Buisienss Collaboration?',
        p1:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis nibh eget semper aliquet. Sed at malesuada neque. Morbi volutpat turpis sed convallis mollis. Mauris tincidunt tincidunt ornare. Maecenas non purus nisi. Sed gravida nibh eu odio lobortis malesuada.',
        p2:
          'Nunc suscipit diam ut ante fermentum vulputate. Fusce lectus justo, aliquet a porttitor eu, lacinia sed neque. Mauris feugiat vestibulum lorem ut volutpat. Donec eget sem feugiat, luctus felis et, lacinia augue.',
        p3:
          'Integer id posuere erat, at volutpat ante. Donec non lectus in nibh egestas facilisis porta et sapien.',
        more: 'Learn more'
      }
    },
    test: {
      question: 'Otázka №',
      thanks: 'Děkuji vám za Váš čas!',
      link_text: 'Své výsledky můžete najít',
      here: 'zde'
    },
    results: {},
    about: {
      title: 'O projektu',
      text_1: 'Tato aplikace je součástí bakalářské práce',
      text_2:
        'Aplikace umožní zájemcům o spolupráci formou testu analyzovat připravenost firmy na spolupráci a identifikovat vhodný typ spolupráce.',
      work: 'Spolupráce vysokých škol s průmyslem',
      author: 'Autor',
      contacts: 'Kontaktní informace',
      source: 'Zdrojový kód',
      cooperation: 'Nabídka spolupráce pro firmy',
      public: 'Oddělení vnějších vztahů - PR'
    },
    statistics: {
      profile: 'Průměrný profil spolupráce',
      avg_duration: 'Průměrná doba trvání testu',
      completed: 'Dokončené testy',
      last: 'Poslední test dokončen',
      duration: 'Trvání delší než 60 minut se ignoruje',
      types: 'Nejčastější typy spolupráce',
      score: 'Průměrná připravenost na spolupráci',
      params: {
        communication: 'komunikace',
        experience: 'zkušenost',
        expectations: 'očekávání',
        knowledge: 'znalosti',
        people: 'lidé',
        resources: 'zdroje',
        specificity: 'specifikum'
      }
    }
  }
};
export const options = {
  locale,
  messages
};
