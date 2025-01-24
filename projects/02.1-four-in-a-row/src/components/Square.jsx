// eslint-disable-next-line react/prop-types
export const Square = ({children, isSelected ,updateBoard, index}) => {

    const className = 'square' + (isSelected ? ' is-selected' : '')
  
    const handleClick = () => {
      updateBoard(index)
    }

    const handleMouseEnter = () => {
      const squares = document.querySelectorAll(`.square`)
      const column = index % 4
      squares.forEach((square, i) => {
        if (i % 4 === column && i < 16) {
          square.classList.add('highlight-column')
        }
      })
    }

    const handleMouseLeave = () => {
      const squares = document.querySelectorAll(`.square`)
      squares.forEach((square) => {
        square.classList.remove('highlight-column')
      })
    }
  
    return (
      <div onClick={handleClick} 
        className = {className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {children}
      </div>
    )
  }