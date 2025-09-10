const componentTypes = [
  {
    name: 'Hero Section',
    icon: 'FaImage',
    template: {
      title: { type: 'string', default: 'Welcome to Your New Page' },
      subtitle: { type: 'string', default: 'This is a powerful headless CMS.' },
      backgroundImage: { type: 'media', default: '' },
    },
  },
  {
    name: 'Text Block',
    icon: 'FaParagraph',
    template: {
      content: {
        type: 'richtext',
        default:
          '<p>Start writing your content here. You can use <strong>bold</strong>, <em>italics</em>, and more.</p>',
      },
    },
  },
  {
    name: 'Image',
    icon: 'FaFileImage',
    template: {
      src: { type: 'media', default: 'https://via.placeholder.com/1200x400' },
      alt: { type: 'string', default: 'Placeholder image' },
    },
  },
  {
    name: 'Button',
    icon: 'FaLink',
    template: {
      text: { type: 'string', default: 'Learn More' },
      url: { type: 'string', default: '#' },
      variant: { type: 'select', options: ['primary', 'secondary'], default: 'primary' },
    },
  },
];

module.exports = componentTypes;
