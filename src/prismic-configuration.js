
export const apiEndpoint = 'https://e-mediate.cdn.prismic.io/api/v2'

export const accessToken = ''


export const linkResolver = (doc) => {
 
  if (doc.type === 'articles') return `/blog/${doc.uid}`
  return '/'
}