import Post from '../assets/images/details-post.png'

type Props = {}

const Youcan = (props: Props) => {
  return (
    <section className='youcan'>
        <div className="youcan-content">
            <h3 className="global-heading"><span>Tất cả mọi ngành nghề mà bạn tìm kiếm,</span> bạn có thể tìm thấy trên ConJob.</h3>
            <p className='youcan-desc'>ConJob hướng đến đa dạng các ngành nghề mới nổi như là Streamer, Blogger, KOLs/KOCs, ...</p>
            <a href='#!' className='youcan-more'>Xem thêm</a>
        </div>
        <div className="youcan-image">
            <img src={Post} alt='detail post'/>
        </div>
    </section>
  )
}

export default Youcan;