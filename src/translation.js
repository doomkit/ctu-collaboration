const sessionLocale = sessionStorage.getItem('locale');
export const locale = sessionLocale ? sessionLocale : 'en'; // or 'cz'
export const messages = {
  en: {
    app: {
      title: 'CTU Collaboration'
    },
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
          'Are you considering about collaboration with a technical university? Are you attracted by benefits from a specific cooperation? Have you presented scientific projects and researches?',
        text_2:
          'If one of your answers is yes to one of above questions, you are in the right place. This app is here to find out whether you are prepared for collaboration or find weak spots.',
        button: 'Test',
        alternative_text: 'Or explore the ',
        alternative_link: 'statistics of previous results '
      },
      section: {
        title: "What does term 'collaboration' actually mean?",
        p1:
          'Collaboration means working together to ensure that all participants are satisfied. All participants are likely to be satisfied when they are financially secured, have satisfied employees and management, as well as customers.',
        p2:
          'How to find a suitable cooperation between your company and the Faculty of Electrical Engineering of the CTU?',
        p3:
          'Successful cooperation is built on several pillars, which must be solid and stable. If these pillars are not strong enough, cooperation will collapse after some time. Two main components of prosperous cooperation are People and Communication.',
        more: 'Learn more'
      }
    },
    test: {
      title: 'Collaboration Test',
      text:
        'Choose the answers that correspond to reality as much as possible. No answer is wrong and it can lead to different type of cooperation. You can take a look at all of your answers and some comments to them after completing test.',
      text_2: 'All answers will be saved ',
      anonymusly: 'anonymusly',
      start: 'Start test',
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
      title: 'Statistika',
      subtitle: 'Here you can explore data from completed tests',
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
    },
    404: {
      text: 'Oops, page not found',
      home: 'Home'
    }
  },
  cz: {
    app: {
      title: 'ČVUT Spoluprace'
    },
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
          'Uvažuje Vaše firma o spolupráci s technickou univerzitou? Lákají Vás výhody, které z takové spolupráce plynou? Už si představujete společné projekty a výzkumy?',
        text_2:
          'Pokud jste alespoň na jednu z otázek uvedených výše odpověděli ano, jste tu správně. Tato stránka obsahuje průvodce spoluprací a nabízí udělat si test, zda jste na takovou spolupráci připraveni, případně upozorní na slabá místa.',
        button: 'Test',
        alternative_text: 'Nebo prozkoumejte ',
        alternative_link: 'statistiky předchozích výsledků '
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
        title: 'Co je to vlastně spolupráce?',
        p1:
          'Spolupráce znamená společnou práci více stran takovou, aby všechny strany byly spokojeny. Obě strany budou spokojené pravděpodobně, když budou finančně zajištěné, budou mít spokojené zaměstnance i vedení a zároveň i zákazníky.',
        p2:
          'Jak nalézt vhodnou spolupráci mezi Vaší společností a Fakultou elektrotechnickou ČVUT?',
        p3:
          'Úspěšná spolupráce je postavena na několika pilířích, které musí být postaveny a musí být stabilní. Pokud nebudou tyto pilíře dostatečně pevné, spolupráce se po nějakém čase (ať už kratším či delším) zhroutí. Základními vlastnostmi prosperující spolupráce jsou Lidé a Komunikace.',
        more: 'Více o projektu '
      }
    },
    test: {
      title: 'Test spolupráce',
      text:
        'V testu volte odpovědi tak, aby co nejvíce odpovídaly realitě. Žádná odpověď není špatná a každá může vyústit v jiný typ spolupráce. Všechny odpovědi a vysvětlení si budete moci prohlédnout ve vyhodnocení.',
      text_2: 'Všechny odpovědi budou uloženy ',
      anonymusly: 'anonymně',
      start: 'Zahájit test',
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
      title: 'Statistika',
      subtitle: 'Zde si můžete prohlédnout data z dokončených testů',
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
    },
    404: {
      text: 'Oops, stránka nenalezena',
      home: 'Domů'
    }
  }
};
export const options = {
  locale,
  messages
};
