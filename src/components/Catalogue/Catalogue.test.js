import React from 'react';
import { render, screen } from "@testing-library/react";
import Catalogue from './index';



test("Debe tener un label Oferta", async () => {
    render(<Catalogue />);
    // Wait for page to update with query text
    const items = screen.getAllByText("Oferta")
    expect(items).toHaveLength(3);
});
test("Debe tener un label Precio", async () => {
    render(<Catalogue />);
    // Wait for page to update with query text
    const items = screen.getAllByText("Precio")
    expect(items).toHaveLength(3);
});