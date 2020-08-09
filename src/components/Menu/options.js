const options = [
  {
    key: 1,
    name: 'About Us',
    reference: '#about-us'
  },
  {
    key: 2,
    name: 'Fundamentals',
    reference: '#fundamentals'
  },
  {
    key: 3,
    name: 'Services',
    reference: '#service'
  },
  {
    key: 4,
    name: 'Contact us',
    reference: '#contact'
  },
]

export const getOptionReference = (index) => {
  if (index >= options.length) return;

  return options[index]?.reference;
}

export default options;
export const MORE_INFO = 0;
export const CONTACT_US = 2;
