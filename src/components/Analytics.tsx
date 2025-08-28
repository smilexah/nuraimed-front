import Script from 'next/script';

interface AnalyticsProps {
    googleAnalyticsId?: string;
    yandexMetricaId?: string;
}

export default function Analytics({googleAnalyticsId, yandexMetricaId}: AnalyticsProps) {
    return (
        <>
            {googleAnalyticsId && (
                <>
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
                        strategy="afterInteractive"
                    />
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
                          window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());
                          gtag('config', '${googleAnalyticsId}', {
                            send_page_view: true,
                            custom_map: {
                              'custom_parameter_1': 'clinic_section',
                              'custom_parameter_2': 'doctor_specialty'
                            }
                          });
            
                          window.trackClinicEvent = function(action, section, specialty) {
                            gtag('event', action, {
                              event_category: 'clinic_interaction',
                              event_label: section,
                              custom_parameter_1: section,
                              custom_parameter_2: specialty || 'general'
                            });
                          };
            
                          document.addEventListener('click', function(e) {
                            const link = e.target.closest('a');
                            if (!link) return;
                          
                            if (link.href.startsWith('tel:')) {
                              gtag('event', 'phone_call', {
                                event_category: 'contact',
                                event_label: link.href.replace('tel:', ''),
                                value: 1
                              });
                            }
                          
                            if (link.href.includes('wa.me')) {
                              gtag('event', 'whatsapp_click', {
                                event_category: 'contact',
                                event_label: 'whatsapp_message',
                                value: 1
                              });
                            }
                          });
                        `}
                    </Script>
                </>
            )}

            {yandexMetricaId && (
                <Script id="yandex-metrica" strategy="afterInteractive">
                    {`
                      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                      m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                        
                      ym(${yandexMetricaId}, "init", {
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true,
                        webvisor:true,
                        ecommerce: "dataLayer",
                        params: {
                          clinic_name: "DI-CLINIC",
                          city: "Almaty"
                        }
                      });
            
                      window.ymReachGoal = function(goal, params) {
                        if (typeof ym !== 'undefined') {
                          ym(${yandexMetricaId}, 'reachGoal', goal, params);
                        }
                      };
                    `}
                </Script>
            )}

            {yandexMetricaId && (
                <noscript
                    dangerouslySetInnerHTML={{
                        __html: `<div><img src="https://mc.yandex.ru/watch/${yandexMetricaId}" style="position:absolute; left:-9999px;" alt="" /></div>`,
                    }}
                />
            )}
        </>
    );
}
