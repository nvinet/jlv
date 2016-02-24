import hbs from 'hbs';

const hbsHelper = ($staticify) => {
  hbs.registerHelper('getVersionedPath', ($path) => {
    return $staticify.getVersionedPath($path);
  });

  hbs.registerHelper('toUpperCase', (str) => {
    return str.toUpperCase();
  });

  hbs.registerHelper('toLowerCase', (str) => {
    return str.toLowerCase();
  });

  hbs.registerHelper('foreach', (arr, options) => {
    if (options.inverse && !arr.length) {
      return options.inverse(this);
    }

    return arr.map(function (item, index) {
      item.$index = index;
      item.$first = index === 0;
      item.$last = index === arr.length - 1;
      return options.fn(item);
    }).join('');
  });
};

export default hbsHelper;
