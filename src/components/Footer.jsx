import React from 'react'
import '../assets/styles/Footer.css';
import right_icon from '../assets/images/right_icon.png';
import footer_facebook from '../assets/images/footer_facebook.png';
import footer_instagram from '../assets/images/footer_instagram.png';
import footer_youtube from '../assets/images/footer_youtube.png';
import footer_x from '../assets/images/footer_x.png';
import security_certification1 from '../assets/images/security_certification.png';
import footer_trust_stamp from '../assets/images/footer_trust_stamp.png'
import footer_pci_dss from '../assets/images/footer_pci_dss.png';
import footer_iso from '../assets/images/footer_iso.png';
import footer_troy from '../assets/images/footer_troy.png';
import footer_mastercard from '../assets/images/footer_mastercard.png';
import footer_visa from '../assets/images/footer_visa.png';
import footer_american_express from '../assets/images/footer_american_express.png';
import footer_app_store from '../assets/images/footer_app_store.png';
import footer_google_play from '../assets/images/footer_google_play.png';
import footer_app_gallery from '../assets/images/footer_app_gallery.png';
const Footer = () => {
  return (
    <div className='Footer'>
        <div className='footer_container'>
            <div className='footer_top'>
                <div className='menu_section'>
                  <a href='#' className='menu_title'>Trendyol</a>
                  <ul className='sub_menu'>
                    <li><a href='#' className='sub_menu_link'>Biz Kimiz</a></li>
                    <li><a href='#' className='sub_menu_link'>Kariyer</a></li>
                    <li><a href='#' className='sub_menu_link'>Sürdürülebilirlik</a></li>
                    <li><a href='#' className='sub_menu_link'>İletişim</a></li>
                    <li><a href='#' className='sub_menu_link'>Trendyol'da Güvenlik</a></li>
                    <li><a href='#' className='sub_menu_link'>Ürün Geri Çağırma</a></li>
                  </ul>
                </div>
                <div className='menu_section'>
                  <a href='#' className='menu_title'>Kampanyalar</a>
                  <ul className='sub_menu'>
                    <li><a href='#' className='sub_menu_link'>Kampanyalar</a></li>
                    <li><a href='#' className='sub_menu_link'>Alışveriş Kredisi</a></li>
                    <li><a href='#' className='sub_menu_link'>Elit Üyelik</a></li>
                    <li><a href='#' className='sub_menu_link'>Hediye Fikirleri</a></li>
                  </ul>
                </div>
                <div className='menu_section'>
                  <a href='#' className='menu_title'>Satıcı</a>
                  <ul className='sub_menu'>
                    <li><a href='#' className='sub_menu_link'>Trendyol'da Satış Yap</a></li>
                    <li><a href='#' className='sub_menu_link'>Temel Kavramlar</a></li>
                    <li><a href='#' className='sub_menu_link'>Trendyol Akademi</a></li>
                  </ul>
                </div>
                <div className='menu_section'>
                  <a href='#' className='menu_title'>Yardım</a>
                  <ul className='sub_menu'>
                    <li><a href='#' className='sub_menu_link'>Sıkça Sorulan Sorular</a></li>
                    <li><a href='#' className='sub_menu_link'>Canlı Yardım / Asistan</a></li>
                    <li><a href='#' className='sub_menu_link'>Nasıl İade Edebilirim</a></li>
                    <li><a href='#' className='sub_menu_link'>İşlem Rehberi</a></li>
                  </ul>
                </div>
                <div className='menu_section'>
                  <a className='menu_title' href='#'>Ülke Değiştir</a>
                  <ul className='sub_menu'>
                    <li>
                      <div className='change_country_container'>
                        <button href='https://www.trendyol.com/en/select-country?cb=/en' className='change_country_btn'>Ülke Seç
                        <img src={right_icon} />
                        </button>
                        
                        <div className='social_media_container'>
                          <div className='menu_title'>Sosyal Medya</div>
                          <div className='social_media_links_container'>
                            <a target='blank' href='https://www.facebook.com/Trendyol' className='social_media_links'>
                              <img className='social_media_img' src={footer_facebook}/>
                            </a>
                            <a target='blank' href='https://www.instagram.com/trendyolcom' className='social_media_links'>
                              <img className='social_media_img' src={footer_instagram} />
                            </a>
                            <a target='blank' href='https://www.youtube.com/trendyol' className='social_media_links'>
                              <img className='social_media_img' src={footer_youtube} />
                            </a>
                            <a target='blank' href='https://x.com/trendyol' className='social_media_links'>
                              <img className='social_media_img' src={footer_x} />
                            </a>
                          </div>
                        </div>
                      </div>
                      </li>
                  </ul>
                </div>
            </div>
            <div className='footer_bottom'>
              <div className='menu_section'>
                <div className='menu_title'>Güvenlik Sertifikası</div>
                <ul className='sub_menu'>
                  <li className='sub_menu_item'>
                    <div className='security_certificate_links_container'>
                      <a target='blank' href='https://www.eticaret.gov.tr/siteprofil/305B30787EA6409BBF6EFBEA3D437B96/wwwtrendyolcom'>
                        <img className='security_certificate_image' alt='ETBİS Sertifikası ikonu' src={security_certification1} />
                      </a>
                      <a target='blank' href='https://www.guvendamgasi.org.tr/firmadetay.php?Guid=8e69c8c5-2f03-11ea-8718-48df373f4850'>
                        <img className='security_certificate_image' alt='Güven Damgası ikonu' src={footer_trust_stamp} />
                      </a>
                        <img className='security_certificate_image' src={footer_pci_dss} />
                        <img className='security_certificate_image' src={footer_iso} />
                    </div>
                  </li>
                </ul>
              </div>
              <div className='menu_section'>
                <div className='menu_title'>Güvenli Alışveriş</div>
                <ul className='sub_menu'>
                  <li className='sub_menu_item'>
                    <div className='secure_shopping_links_container'>
                      <img className='secure-shopping-image' src={footer_troy} />
                      <img className='secure-shopping-image' src={footer_mastercard} />
                      <img className='secure-shopping-image' src={footer_visa} />
                      <img className='secure-shopping-image' src={footer_american_express} />
                    </div>
                  </li>
                </ul>
              </div>
              <div className='menu_section'>
                <div className='menu_title'>Mobil Uygulamalar</div>
                <ul className='sub_menu'>
                  <li className='sub_menu_item'>
                      <div className='mobile_app_links_container'>
                        <a target='blank' className='mobile_app_link' href='https://apps.apple.com/tr/app/trendyol-fashion-trends/id524362642' >
                          <img className='mobile_app_image' src={footer_app_store} />
                        </a>
                        <a target='blank' className='mobile_app_link' href='https://play.google.com/store/apps/details?id=trendyol.com'>
                        <img className='mobile_app_image' src={footer_google_play} />
                        </a>
                        <a target='blank' className='mobile_app_link' href='https://appgallery.huawei.com/app/C101645013'>
                          <img className='mobile_app_image' src={footer_app_gallery} />
                        </a>
                      </div>
                  </li>
                </ul>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
