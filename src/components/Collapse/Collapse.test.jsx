import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react';
import Collapse from './Collapse';

describe('Collapse', () => {
    it('the content is hidden by default', () => {
        render(<Collapse title="Description" content="Contenu de la description" />)
        expect(screen.getByText('Description')).toBeInTheDocument();
    })

    it('displays the content after a click', () => {
        render(<Collapse title="Description" content="Contenu de la description" />)
        fireEvent.click(screen.getByText('Description'));;
        expect(screen.getByText('Contenu de la description')).toBeInTheDocument();
    })

    it('hides the content after a second click', () => {
        render(<Collapse title="Description" content="Contenu de la description" />)
        fireEvent.click(screen.getByText('Description'));
        fireEvent.click(screen.getByText('Description'));
        expect(screen.queryByText('Contenu de la description')).not.toBeInTheDocument();
    })
})
