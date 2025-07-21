import { render, screen } from '@testing-library/react';
import { GifItem } from '../../components/GifItem';

describe('GifItem Component', () => {
  const props = {
    id: '123',
    title: 'Test Title',
    url: 'https://test-url.com/image.jpg',
    tag: 'Test Tag'
  };

  test('should render correctly', () => {
    render(<GifItem {...props} />);
    
    // Verificar que la imagen se renderiza con el URL correcto
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', props.url);
    expect(image).toHaveAttribute('alt', props.tag);
    
    // Verificar que el texto del tag se muestra
    expect(screen.getByText(props.tag)).toBeInTheDocument();
  });

  test('should match snapshot', () => {
    const { container } = render(<GifItem {...props} />);
    expect(container).toMatchSnapshot();
  });
});