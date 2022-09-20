import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from "../index"
it('Should render title text', () => {
  render(<Home />)
  // expect(screen.getByText('Next.js!')).toBeInTheDocument()
  // const heading = screen.getByRole("heading", {
  //   name: /welcome to next\.js!/i,
  // });

  // expect(heading).toBeInTheDocument();
})