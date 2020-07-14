const options = [
  {
    key: 1,
    name: 'About Us',
    reference: '#about-us'
  },
  {
    key: 2,
    name: 'Option',
    reference: '#option'
  },
  {
    key: 3,
    name: 'Option',
    reference: '#option'
  },
]

export const getOptionReference = (index) => {
  if (index >= options.length) return;

  return options[index]?.reference;
}

export default options;
export const MORE_INFO = 0;
export const CONTACT_US = 2;
