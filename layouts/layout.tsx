import styled from 'styled-components'

type Props = {
  children: JSX.Element,
}

export const Container = styled.div`
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  padding: 10px;
`

export default function Layout({ children }: Props) {
  return (
    <Container>
      <main>{children}</main>
    </Container>
  )
}