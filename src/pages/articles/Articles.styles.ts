import styled from '@emotion/styled'

export const SearchArea = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center'
})

export const Input = styled.input({
  width: '100%',
  borderRadius: 5,
  padding: '10px 0 10px 10px',
  border: '1px solid #ccc',
  backgroundColor: '#f5f0e4',
  boxSizing: 'border-box'
})

export const Label = styled.label({
  paddingBottom: 10,
  fontWeight: 'bold'
})

export const List = styled.ul({
  padding: 0,
  listStyle: 'none'
})

export const ListItem = styled.li({
  border: '1px solid #ccc',
  backgroundColor: '#fafafa',
  margin: 0,
  padding: 10
})

export const ListLabel = styled.div({
  paddingBottom: 10,
  fontWeight: 'bold'
})

export const NaviagationArea = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

export const NavigationButton = styled.button({
  background: 'none',
  border: 'none',
  margin: 0,
  cursor: 'pointer',
  textDecoration: 'underline',
  color: ' -webkit-link'
})
