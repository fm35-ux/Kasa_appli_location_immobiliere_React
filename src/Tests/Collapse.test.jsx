import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react';
import Collapse from '../components/Collapse/Collapse';

describe('Collapse', () => {
    it('the content is hidden by default', () => {
        render(<Collapse title="Description" content="Contenu de la description" />)
        const title = screen.getByText('Description');
        expect(title).toBeInTheDocument();
    })

    it('displays the content after a click', () => {
        render(<Collapse title="Description" content="Contenu de la description" />)
        const title = screen.getByText('Description');
        fireEvent.click(title);
        const content = screen.getByText('Contenu de la description');
        expect(content).toBeInTheDocument();
    })

    it('hides the content after a second click', () => {
        render(<Collapse title="Description" content="Contenu de la description" />)
        const title = screen.getByText('Description');
        fireEvent.click(title);
        fireEvent.click(title);
        const content = screen.queryByText('Contenu de la description');
        expect(content).not.toBeInTheDocument();
    })
})
