import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react';
import Banner from '../components/Banner/Banner';

describe('Banner', () => {

    it('displays the text passed as a prop', () => {
        render(<Banner text="Chez vous, partout et ailleurs" />)
        const title = screen.getByText('Chez vous, partout et ailleurs');
        expect(title).toBeInTheDocument();
    })

    it('does not display any text when the text prop is missing', () => {
        render(<Banner />)
        const title = screen.getByRole('heading', { level: 1 });
        expect(title).toBeEmptyDOMElement();
    })
})