const sessionLocale = sessionStorage.getItem('locale');
export const locale = sessionLocale ? sessionLocale : 'en';
export const messages = {
  en: {
    navbar: {
      home: 'Home',
      test: 'Test',
      statistics: 'Statistics',
      about: 'About'
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
    }
  },
  cz: {
    navbar: {
      home: 'Úvod',
      test: 'Test',
      statistics: 'Statistika',
      about: 'O projektu'
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
    }
  }
};
export const options = {
  locale,
  messages
};
