
import { useEffect, useRef } from 'react';

export default function GoogleReviews({ placeId }: { placeId: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = '';

    const widget = document.createElement('div');
    widget.setAttribute(
      'data-review-widget',
      '9b690312-4cdc-4feb-bf79-c43963752874'
    );

    const script = document.createElement('script');
    script.src = 'https://app.wewidget.app/widget.js';
    script.setAttribute(
      'data-widget-id',
      '9b690312-4cdc-4feb-bf79-c43963752874'
    );
    script.async = true;

    container.appendChild(widget);
    container.appendChild(script);

    return () => {
      container.innerHTML = '';
    };
  }, [placeId]);

  return (
    <section
      id="testimonials"
      className="section page-shell"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow text-ocean-600">
            FROM OUR TRAVELLERS
          </p>
          <h2>Stories from our Travellers</h2>
        </div>
      </div>

      <div ref={containerRef} />
    </section>
  );
}
