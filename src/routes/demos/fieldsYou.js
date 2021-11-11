
import countries from './countryList';

const hearOf = [
  'Code Camp',
  'Another Conference',
  'Meetup or User Group',
  'Social Media',
  'Podcast',
  'Colleague or Friend',
  'Google/Bing/DuckDuckGo',
  'Other  ',
]

const yearsCamping = [
  'First Time Camper',
  '2021 Camper',
  '2020 Camper',
  '2019 Camper',
  '2018 Camper',
  '2017 Camper',
  '2016 Camper',
  '2015 Camper',
  '2014 Camper',
  '2013 Camper',
  '2012 Camper',
];

const ageRanges = [
  'Under 13 years old',
  '13-17 years old',
  '18-24 years old',
  '25-34 years old',
  '35-44 years old',
  '45-54 years old',
  '55-64 years old',
  '65-74 years old',
  '75 years or older',
];

const education = [
  'High School/GED',
  'Associate degree',
  `Bachelor's  degree`,
  `Master's degree`,
  'Professional degree',
  'Doctorate degree',
  'Still in high school',
  'In college (undergraduate)',
  'In college (graduate)',
];

export default [
  {
    type: 'select',
    name: 'spreadword',
    attributes: {
      id: 'id-spread-word',
      label: 'How did you hear about THAT Conference?',
    },
    extra: {
      options: hearOf.map(c => ({
        title: c,
        value: c,
      }))
    },
    rules: ['required'],
  },
  {
    type: 'checkbox',
    name: 'yearsCamping',
    attributes: {
      id: 'id-years-camping',
      label: 'How many years have you been camping? ⛺',
    },
    extra: {
      items: yearsCamping.map(yc => ({
        name: yc,
        value: yc,
        title: yc,
      })),
    },
    rules: ['required'],
  },
  {
    type: 'select',
    name: 'myCountry',
    attributes: {
      id: 'id-country',
      label: 'Which country do you live in? 🌎',
    },
    extra: {
      options: countries.map(c => ({
        title: c.name,
        value: c.code,
      }))
    },
  },
  {
    type: 'input',
    name: 'zipCode',
    attributes: {
      type: 'text',
      id: 'id-zip-code',
      label: 'What is your home Zip Code?',
      placeholder: 'your zip code',
    }
  },
  {
    type: 'select',
    name: 'age',
    attributes: {
      id: 'id-age',
      label: 'Which range does your age fall in?',
    },
    extra: {
      options: ageRanges.map(a => ({
        title: a,
        value: a,
      }))
    },
  },
  {
    type: 'select',
    name: 'education',
    attributes: {
      id: 'id-education',
      label: 'What is your last completed formal education? 🎓',
    },
    extra: {
      options: education.map(a => ({
        title: a,
        value: a,
      }))
    },
  },    
]