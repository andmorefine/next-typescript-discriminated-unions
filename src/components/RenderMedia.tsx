import NextImage from 'next/image'

type Image = { type: 'image'; url: string; alt: string }
type Video = { type: 'video'; url: string; caption: string }

type Media = Image | Video

export const RenderMedia = (media: Media) => {
  switch (media.type) {
    case 'image':
      return <NextImage src={media.url} alt={media.alt} />
    case 'video':
      return (
        <div>
          <video src={media.url} controls />
          <p>{media.caption}</p>
        </div>
      )
    default:
      return null
  }
}
