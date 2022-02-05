import styled from '@emotion/styled'

const ItemList = styled.li`
  display: block;
  margin: 10px;

  .bodyItem{
    display: flex;
    flex-direction: column;
  }

  .imgItem{
    border-radius: 10px;
    height: 180px;
    object-fit: cover;
    width: 200px;
  }

  .titleItem{
      font-size: 0.9rem;
  }

  .priceItem{
      font-size: 0.8rem;
  }
  
  .buttonItem{
      align-self:center;
  }
`

export default ItemList;
