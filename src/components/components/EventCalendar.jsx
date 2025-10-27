import React, { useMemo, useState, useEffect, useCallback } from "react";
import "./EventCalendar.css";

const EC_MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const initialEvents = {
  "2025-09-15": {
    name: "Team Building Workshop",
    description:
      "A collaborative workshop focused on team building activities and strengthening workplace relationships through interactive exercises and group activities.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  "2025-09-22": {
    name: "Project Planning Session",
    description:
      "Comprehensive planning session for upcoming project deliverables and milestone setting with stakeholder alignment and resource allocation.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  "2025-09-28": {
    name: "Design Review Meeting",
    description:
      "Weekly design review to assess current design progress and provide feedback on user interface improvements and user experience enhancements.",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  "2025-10-05": {
    name: "Client Presentation",
    description:
      "Important client presentation showcasing project milestones and demonstrating completed deliverables for stakeholder approval and feedback.",
    image:
      "https://images.unsplash.com/photo-1551818255-e6e10975cd17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  "2025-10-12": {
    name: "Training Workshop",
    description:
      "Professional development workshop covering new technologies, best practices, and skill enhancement for team members and department staff.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  "2025-10-20": {
    name: "Product Launch Event",
    description:
      "Grand product launch event featuring live demonstrations, keynote presentations, and networking opportunities with industry partners.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  "2025-10-27": {
    name: "Event",
    description:
      "Grand product launch event featuring live demonstrations, keynote presentations, and networking opportunities with industry partners.",
    image: "/WhatsApp Image 2025-10-25 at 5.19.18 PM.jpeg",
  },
};

function pad2(n) {
  return String(n).padStart(2, "0");
}

function ymd(date) {
  return `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(
    date.getDate()
  )}`;
}

export default function EventCalendar() {
  const now = useMemo(() => new Date(), []);
  const [viewYear, setViewYear] = useState(now.getFullYear());
  const [viewMonth, setViewMonth] = useState(now.getMonth());
  const [selectedDate, setSelectedDate] = useState(null);
  const [events] = useState(initialEvents);

  const firstDay = useMemo(
    () => new Date(viewYear, viewMonth, 1).getDay(),
    [viewYear, viewMonth]
  );
  const daysInMonth = useMemo(
    () => new Date(viewYear, viewMonth + 1, 0).getDate(),
    [viewYear, viewMonth]
  );
  const daysInPrevMonth = useMemo(
    () => new Date(viewYear, viewMonth, 0).getDate(),
    [viewYear, viewMonth]
  );

  const previousMonth = useCallback(() => {
    setViewMonth((m) => {
      if (m === 0) {
        setViewYear((y) => y - 1);
        return 11;
      }
      return m - 1;
    });
  }, []);

  const nextMonth = useCallback(() => {
    setViewMonth((m) => {
      if (m === 11) {
        setViewYear((y) => y + 1);
        return 0;
      }
      return m + 1;
    });
  }, []);

  useEffect(() => {
    const todayKey = ymd(now);
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    setSelectedDate({
      key: todayKey,
      date: d,
      hasEvent: Boolean(events[todayKey]),
    });
  }, [now, events]);

  const handleSelect = (dateObj, isOtherMonth = false) => {
    if (isOtherMonth) return;
    const key = ymd(dateObj);
    setSelectedDate({ key, date: dateObj, hasEvent: Boolean(events[key]) });
  };

  const renderLeading = () => {
    const cells = [];
    for (let i = firstDay - 1; i >= 0; i--) {
      const dayNum = daysInPrevMonth - i;
      cells.push(
        <button
          key={`prev-${dayNum}`}
          className="ec-day ec-day--other"
          type="button"
          onClick={() => {}}
          aria-disabled="true"
          tabIndex={-1}
        >
          {dayNum}
        </button>
      );
    }
    return cells;
  };

  const renderCurrent = () => {
    const cells = [];
    for (let d = 1; d <= daysInMonth; d++) {
      const dateObj = new Date(viewYear, viewMonth, d);
      const key = ymd(dateObj);
      const isToday =
        dateObj.getFullYear() === now.getFullYear() &&
        dateObj.getMonth() === now.getMonth() &&
        dateObj.getDate() === now.getDate();
      const hasEvent = Boolean(events[key]);
      const isSelected = selectedDate && selectedDate.key === key;

      const classNames = [
        "ec-day",
        hasEvent ? "ec-day--hasEvent" : "",
        isToday ? "ec-day--today" : "",
        isSelected ? "ec-day--selected" : "",
      ]
        .filter(Boolean)
        .join(" ");

      cells.push(
        <button
          key={key}
          className={classNames}
          type="button"
          onClick={() => handleSelect(dateObj)}
          aria-pressed={isSelected}
          aria-label={`${d} ${EC_MONTHS[viewMonth]} ${viewYear}${
            hasEvent ? " — has event" : ""
          }`}
        >
          {d}
        </button>
      );
    }
    return cells;
  };

  const renderTrailing = () => {
    const totalCells = firstDay + daysInMonth;
    const remaining = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
    const cells = [];
    for (let d = 1; d <= remaining; d++) {
      cells.push(
        <button
          key={`next-${d}`}
          className="ec-day ec-day--other"
          type="button"
          onClick={() => {}}
          aria-disabled="true"
          tabIndex={-1}
        >
          {d}
        </button>
      );
    }
    return cells;
  };

  const selectedDetails = useMemo(() => {
    if (!selectedDate) return null;
    const { date, key } = selectedDate;
    const event = events[key];
    return {
      label: `${date.getDate()} ${EC_MONTHS[date.getMonth()]}`,
      name: event ? event.name : "NO EVENT SCHEDULED",
      description: event
        ? event.description
        : "There are no events scheduled for this date. Check other dates for upcoming events and activities.",
      image: event
        ? event.image
        : "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjZjVmNWY1Ii8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjEyNSIgcj0iNDAiIGZpbGw9IiNkZGQiLz4KPHRleHQgeD0iMTUwIiB5PSIxNDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+Tm8gRXZlbnQ8L3RleHQ+Cjwvc3ZnPg==",
    };
  }, [selectedDate, events]);

  const onImageError = (e) => {
    e.currentTarget.src =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjZjVmNWY1Ii8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjEyNSIgcj0iNDAiIGZpbGw9IiNmZjZiMzUiLz4KPHRleHQgeD0iMTcwIiB5PSIxNDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiPkV2ZW50PC90ZXh0Pgo8L3N2Zz4=";
  };

  return (
    <div className="ec-root">
      <div className="ec-header">
        <h1 className="tuap-about-title">Whats Happening</h1>
        <div className="ec-titleLine" />
      </div>

      <div className="ec-main">
        <section className="ec-calendarSection">
          <div className="ec-calendar">
            <div className="ec-nav">
              <button
                className="ec-navBtn"
                type="button"
                onClick={previousMonth}
                aria-label="Previous month"
              >
                ‹
              </button>
              <div className="ec-monthYear" aria-live="polite">
                {EC_MONTHS[viewMonth]} {viewYear}
              </div>
              <button
                className="ec-navBtn"
                type="button"
                onClick={nextMonth}
                aria-label="Next month"
              >
                ›
              </button>
            </div>

            <div
              className="ec-grid"
              role="grid"
              aria-labelledby="ec-grid-title"
            >
              <div
                id="ec-grid-title"
                className="ec-gridTitle"
                aria-hidden="true"
              >
                CALENDAR
              </div>
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                <div
                  key={d}
                  className="ec-dayHeader"
                  role="columnheader"
                  aria-label={d}
                >
                  {d}
                </div>
              ))}

              {renderLeading()}
              {renderCurrent()}
              {renderTrailing()}
            </div>
          </div>
        </section>

        <section className="ec-eventSection">
          {/* New card structure with overlay badge */}
          <div className="ec-card">
            <div className="ec-cardMedia">
              <img
                className="ec-cardImg"
                src={selectedDetails ? selectedDetails.image : ""}
                alt="Event"
                onError={onImageError}
              />
              <span className="ec-cardBadge">
                {selectedDetails ? selectedDetails.label : "Date"}
              </span>
            </div>
            <div className="ec-cardBody">
              <h3 className="ec-cardTitle">
                {selectedDetails ? selectedDetails.name : "EVENT NAME"}
              </h3>
              <p className="ec-cardText">
                {selectedDetails
                  ? selectedDetails.description
                  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
