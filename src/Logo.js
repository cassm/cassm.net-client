const Logo = props => {
  const slideDuration="1.5s";

  const slideAnimation = <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="translate"
          from="-54 0"
          to="0 0"
          dur={slideDuration}
          additive="replace"/>;

  return (
    <svg width={props.width} height={props.height} className={props.className} viewBox="0 0 308 296.75" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- defs are global, so we need to define two and conditionally apply them rather than conditionally defining one -->
        <clipPath id="M_clip">
          <path className="powerclip"
                d="M-5.178-5.141h330.86v306.37H-5.178zm138.73 44.727a11.026 11.026 0 0 0-11.025 11.025v141.41a11.026 11.026 0 0 0 11.025 11.025h37.2a11.026 11.026 0 0 0 11.024-11.025v-20.998l17.797 25.037a11.026 11.026 0 0 0 8.986 4.639h.26a11.026 11.026 0 0 0 8.994-4.648l17.701-24.961v20.932a11.026 11.026 0 0 0 11.025 11.025h37.2a11.026 11.026 0 0 0 11.024-11.025V50.506a11.026 11.026 0 0 0-11.025-11.025h-14.949a11.026 11.026 0 0 0-8.904 4.525l-51.24 70.195-51.24-70.195a11.026 11.026 0 0 0-8.904-4.525z"/>
        </clipPath>
        <clipPath id="M_clip_animated">
          <path className="powerclip"
                d="M-5.178-5.141h330.86v306.37H-5.178zm138.73 44.727a11.026 11.026 0 0 0-11.025 11.025v141.41a11.026 11.026 0 0 0 11.025 11.025h37.2a11.026 11.026 0 0 0 11.024-11.025v-20.998l17.797 25.037a11.026 11.026 0 0 0 8.986 4.639h.26a11.026 11.026 0 0 0 8.994-4.648l17.701-24.961v20.932a11.026 11.026 0 0 0 11.025 11.025h37.2a11.026 11.026 0 0 0 11.024-11.025V50.506a11.026 11.026 0 0 0-11.025-11.025h-14.949a11.026 11.026 0 0 0-8.904 4.525l-51.24 70.195-51.24-70.195a11.026 11.026 0 0 0-8.904-4.525z">
            {slideAnimation}
          </path>
        </clipPath>
      </defs>
      <path id="C_path" transform="translate(.948 -.106)"
            d="M154.51 296.23c43.066 0 79.102-17.051 106.17-41.66l-42.891-57.129c-18.281 16.348-39.551 27.598-63.281 27.598-40.43 0-78.398-32.344-78.398-76.289 0-43.418 36.387-76.641 79.98-76.641 20.918 0 43.945 10.371 61.348 26.191l43.242-55.547C231.676 16.386 192.477.39 155.91-.138 67.668-.138-.18 64.374-.18 148.222c0 88.945 74.707 148.01 154.69 148.01z"
            clip-path={props.doAnimate ? "url(#M_clip_animated)" : "url(#M_clip)"}/>
      <path id="M_path"
            d="m269.74 48.506-60.145 82.395-60.145-82.395h-14.949v141.41H171.7v-55.538l37.808 53.191h.26l37.722-53.191v55.538h37.199V48.506z">
        {props.doAnimate ? slideAnimation : ""}
      </path>
    </svg>
  )
}

export default Logo;