import Head from 'next/head';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Pricing.module.css';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export default function Pricing() {
    const [billingCycle, setBillingCycle] = useState('monthly');
    const logos = [
        { src: '/images/webflow.png', alt: 'Webflow' },
        { src: '/images/attentive.png', alt: 'Attentive' },
        { src: '/images/quora.png', alt: 'Quora' },
        { src: '/images/stripe.png', alt: 'Stripe' },
        { src: '/images/cbre.png', alt: 'CBRE' },
        { src: '/images/notion.png', alt: 'Notion' },
      ];
      const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      };
    return (
        <>
            <div className={styles.container}>
                <main className={styles.main}>
                    <div className="container">
                        {/* Pricing Header */}
                        <div className={`${styles.pricingHeader} text-center`}>
                            <h1 className={styles.title}>Pricing</h1>
                            <p className={styles.subtitle}>
                                From early-stage startups to growing <br></br> enterprises, Context has you covered.
                            </p>
                        </div>

                        {/* Billing Toggle */}
                        <div className={`${styles.billingToggle} d-flex justify-content-center mb-4`}>
                            <div className={styles.toggleContainer}>
                                <button
                                    className={`${styles.toggleButton} ${billingCycle === 'monthly' ? styles.active : ''}`}
                                    onClick={() => setBillingCycle('monthly')}
                                >
                                    Monthly
                                </button>
                                <button
                                    className={`${styles.toggleButton} ${billingCycle === 'annually' ? styles.active : ''}`}
                                    onClick={() => setBillingCycle('annually')}
                                >
                                    Annually
                                </button>
                            </div>
                        </div>

                        {billingCycle === 'annually' && (
                            <div className={`${styles.promoMessage} text-center mb-4`}>
                                <span style={{ color: "#006A8C" }}>Get 2 months free</span> with an annual membership
                            </div>
                        )}

                        {/* Pricing Plans */}
                        <div className="row">
                            {/* Free Plan */}
                            <div className="col-lg-4 mb-4">
                                <div className={styles.pricingCard}>
                                    <div className={styles.planHeader}>
                                        <h3 className={styles.priceText}>Free</h3>
                                        <p className={styles.price}>$0/month</p>
                                    </div>
                                    <div className={styles.divider}></div>
                                    <div className={styles.planFeatures}>
                                        <div className={styles.feature}>
                                            <span className={styles.checkmark}>✓</span>
                                            <span>50 credits</span>
                                        </div>
                                        <div className={styles.feature}>
                                            <span className={styles.checkmark}>✓</span>
                                            <span>Integrate with Slack, Google Drive, Email & more</span>
                                        </div>
                                        <div className={styles.feature}>
                                            <span className={styles.checkmark}>✓</span>
                                            <span>Presentations, Documents, Spreadsheets, and Deep Research</span>
                                        </div>
                                        <div className={styles.feature}>
                                            <span className={styles.checkmark}>✓</span>
                                            <span>1 Workspace</span>
                                        </div>
                                        <div className={styles.feature}>
                                            <span className={styles.checkmark}>✓</span>
                                            <span>Up to 10 team members</span>
                                        </div>
                                        <div className={styles.feature}>
                                            <span className={styles.checkmark}>✓</span>
                                            <span>Email support</span>
                                        </div>
                                    </div>
                                    <div className={styles.planFooter}>
                                        <button className={styles.secondaryButton}>Get Started</button>
                                    </div>
                                </div>
                            </div>

                            {/* Premium Plan */}
                            <div className="col-lg-4 mb-4">
                                <div className={`${styles.pricingCard} ${styles.premiumCard}`}>
                                    <div className={styles.planHeader}>
                                        <h3 className={styles.priceText}>Premium</h3>
                                        <p className={styles.price}>$20/month</p>
                                        <span className={styles.popularBadge}>POPULAR</span>
                                    </div>
                                    <div className={styles.divider}></div>
                                    <div className={styles.planFeatures}>
                                        <div className={styles.feature}>
                                            <span className={styles.fwReg}>Everything in <span className={styles.fwBold}>Free</span> plan:</span>
                                        </div>
                                        <div className={styles.feature}>
                                            <span className={styles.checkmark}>✓</span>
                                            <span>2,000 credits</span>
                                        </div>
                                        <div className={styles.feature}>
                                            <span className={styles.checkmark}>✓</span>
                                            <span>Unlimited workspaces</span>
                                        </div>
                                        <div className={styles.feature}>
                                            <span className={styles.checkmark}>✓</span>
                                            <span>Unlimited team members</span>
                                        </div>
                                        <div className={styles.feature}>
                                            <span className={styles.checkmark}>✓</span>
                                            <span>Priority email support</span>
                                        </div>
                                    </div>
                                    <div className={styles.planFooter}>
                                        <button className={styles.primaryButton}>Buy now</button>
                                    </div>
                                </div>
                            </div>

                            {/* Enterprise Plan */}
                            <div className="col-lg-4 mb-4">
                                <div className={styles.pricingCard}>
                                    <div className={styles.planHeader}>
                                        <h3 className={styles.priceText}>Enterprise</h3>
                                        <p className={styles.price}>Custom</p>
                                    </div>
                                    <div className={styles.divider}></div>
                                    <div className={styles.planFeatures}>
                                        <div className={`${styles.feature} ${styles.fwReg}`}>
                                            <span className={styles.fwReg}>Everything in <span className={styles.fwBold}>Premium</span> plan:</span>
                                        </div>
                                        <div className={styles.feature}>
                                            <span className={styles.checkmark}>✓</span>
                                            <span>Dedicated account manager</span>
                                        </div>
                                        <div className={styles.feature}>
                                            <span className={styles.checkmark}>✓</span>
                                            <span>Unlimited workspaces</span>
                                        </div>
                                        <div className={styles.feature}>
                                            <span className={styles.checkmark}>✓</span>
                                            <span>Unlimited team members</span>
                                        </div>
                                        <div className={styles.feature}>
                                            <span className={styles.checkmark}>✓</span>
                                            <span>API access (coming soon)</span>
                                        </div>
                                        <div className={styles.feature}>
                                            <span className={styles.checkmark}>✓</span>
                                            <span>Custom AI model (coming soon)</span>
                                        </div>
                                    </div>
                                    <div className={styles.planFooter}>
                                        <button className={styles.secondaryButton}>Contact Sales</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Logos */}
                        <div className={styles.clientLogos}>
      <Slider {...sliderSettings}>
        {logos.map((logo, index) => (
          <div key={index}>
            <div
              style={{
                width: '120px',
                height: '40px',
                position: 'relative',
                margin: 'auto',
              }}
            >
              <Image src={logo.src} alt={logo.alt} fill style={{ objectFit: 'contain' }} />
            </div>
          </div>
        ))}
      </Slider>
    </div>


                        {/* Promotions */}
                        <div className="row mt-5">
                            <div className="col-lg-6 mb-4">
                                <div className={styles.promoCard}>
                                    <div className={styles.promoLabel}>Context for startups</div>
                                    <h3 className={styles.promoTitle}>Free 3-month of Context's Premium Plan</h3>
                                    <p className={styles.promoDescription}>
                                        For selected pre-Series A startups. Submit your company info for review. Limited spots—apply now to accelerate growth!
                                    </p>
                                    <button className={styles.promoButton}>
                                        Apply Now <span className={styles.arrowRight}>→</span>
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className={`${styles.promoCard} ${styles.promoCardStudent}`}>
                                    <div className={styles.promoLabelStudent}>Context for Students</div>
                                    <h3 className={styles.promoTitle}>Get 50% off Context Premium!</h3>
                                    <p className={styles.promoDescription}>
                                        Submit your information for verification. Limited offer – apply now!
                                    </p>
                                    <button className={styles.promoButton}>
                                        Apply Now <span className={styles.arrowRight}>→</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <div className={styles.faqSection}>
                            <h2 className={styles.faqTitle}>Frequently <br></br> Asked Questions</h2>

                            <div className={styles.faqItem}>
                                <h3 className={styles.faqQuestion}>What happens when I run out of credits?</h3>
                                <p className={styles.faqAnswer}>
                                    If you reach your credit limit, you can either wait until your next billing cycle or purchase additional credits.
                                </p>
                            </div>

                            <div className={styles.faqItem}>
                                <h3 className={styles.faqQuestion}>Do credits roll over if I don't use them?</h3>
                                <p className={styles.faqAnswer}>
                                    Credits reset at the beginning of each billing cycle and do not roll over.
                                </p>
                            </div>

                            <div className={styles.faqItem}>
                                <h3 className={styles.faqQuestion}>Can I change or cancel my plan anytime?</h3>
                                <p className={styles.faqAnswer}>
                                    Yes, you can upgrade, or cancel at any time from your account settings. Your changes will take effect in the next billing cycle.
                                </p>
                            </div>

                            <div className={styles.faqItem}>
                                <h3 className={styles.faqQuestion}>Do you offer discounts for annual plans?</h3>
                                <p className={styles.faqAnswer}>
                                    Yes! Our annual plans offer significant savings compared to monthly billing. You'll see the discount when selecting your plan.
                                </p>
                            </div>

                            <div className={styles.faqItem}>
                                <h3 className={styles.faqQuestion}>What payment methods do you accept?</h3>
                                <p className={styles.faqAnswer}>
                                    We accept all major credit cards and bank transfers. Enterprise customers can request invoicing.
                                </p>
                            </div>
                        </div>

                        {/* AI CTA Section */}
                        <div className={styles.aiCtaSection}>
                            <div className="row">
                                <div className="col-lg-6 psc-mob-0  d-flex justify-content-center align-items-center flex-column">
                                    <div className={`${styles.aiCtaContent}`}>
                                        <h2 className={styles.aiCtaTitle}>Put AI to work.</h2>
                                        <p className={styles.aiCtaDescription}>
                                            Empower your team with AI that enhances research, automates workflows, and accelerates decision-making—secure, scalable, and built for enterprise.
                                        </p>
                                        <button className={styles.aiCtaButton}>Talk to Sales</button>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className={styles.aiCtaImage}>
                                        <Image
                                            src="/images/ai-chat.png"
                                            alt="AI Chat Demo"
                                            width={500}
                                            height={400}
                                            className={styles.aiDemoImage}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

            </div>
        </>
    );
}