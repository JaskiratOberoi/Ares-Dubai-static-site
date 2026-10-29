/**
 * A product photograph on its white studio ground, multiplied onto the
 * panel so the ground disappears and the instrument sits on the paper.
 * With `transition`, the image carries a view-transition name so it can
 * travel between the home index and the platforms page.
 */
const ProductFigure = ({ product, className = '', priority = false, scale, transition = false }) => {
  const figureScale = scale ?? product.imageScale
  return (
    <figure
      className={`product-figure ${className}`}
      style={figureScale && figureScale !== 1 ? { '--figure-scale': figureScale } : undefined}
      data-kind="product"
    >
      <img
        src={product.image}
        alt={`${product.title}, ${product.subtitle.toLowerCase()}`}
        width={product.imageWidth}
        height={product.imageHeight}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
        style={transition ? { viewTransitionName: `product-${product.id}` } : undefined}
      />
    </figure>
  )
}

export default ProductFigure
