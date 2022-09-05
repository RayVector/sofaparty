interface ICinemaBarProps {
  src: string
  width?: string
  height?: string
  isFullWidth?: boolean
}

export const CinemaBar = ({ src, width, height, isFullWidth = false}: ICinemaBarProps) => {
  return(
    <div>
      <iframe
        src={src}
        width={isFullWidth ? '100%' : width || "607"}
        height={height || "600"}
        frameBorder="0"
        allowFullScreen
        allow="autoplay *; fullscreen *"
      />
    </div>
  )
}
