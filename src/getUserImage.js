

export const getUserImage = (user, size) => {
  return (
    'https://i.imgur.com/'+
    user.imageId+
    user.size+
    '.jpg'
  )
}
