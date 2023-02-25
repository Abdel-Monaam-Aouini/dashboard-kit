import React from "react";
import TicketItem from "../../components/TicketItem/TicketItem";
// Images
import SamSmithImg from "../../assets/images/UserPngImg/user-img-1.png";
import MattDamonImg from "../../assets/images/UserPngImg/user-img-2.png";
import TomCruiseImg from "../../assets/images/UserPngImg/user-img-3.png";
import ChrisEvansImg from "../../assets/images/UserPngImg/user-img-4.png";
import HenryCavilImg from "../../assets/images/UserPngImg/user-img-5.png";
import SteveRogersImg from "../../assets/images/UserPngImg/user-img-6.png";
import RobertDowneyImg from "../../assets/images/UserPngImg/user-img-7.png";
import ChristianBaleImg from "../../assets/images/UserPngImg/user-img-8.png";
// SVG icons
import { TicketsSortIcon, TicketsFilterIcon } from "../../assets/Icons/Icons";

// SCSS
import "./Table.scss";

const infoListArr = [
  {
    id: 0,
    status: "High",
    imgLink: TomCruiseImg,
    subject: "Contact Email not Linked",
    dateDay: "March 26, 2021",
    dateHour: "6:30 PM",
    updateDay: "Updated 1 day ago",
    customerName: "Tom Cruise",
    customerDate: "24.03.2021",
  },
  {
    id: 1,
    status: "Low",
    imgLink: MattDamonImg,
    subject: "Adding Images to Featured Posts",
    dateDay: "May 26, 2021",
    dateHour: "8:00 AM",
    updateDay: "Updated 1 day ago",
    customerName: "Matt Damon",
    customerDate: "24.05.2021",
  },
  {
    id: 2,
    status: "High",
    imgLink: RobertDowneyImg,
    subject: "When will I be charged this month?",
    dateDay: "May 26, 2021",
    dateHour: "7:30 PM",
    updateDay: "Updated 1 day ago",
    customerName: "Robert Downey",
    customerDate: "24.05.2021",
  },
  {
    id: 3,
    status: "Normal",
    imgLink: ChristianBaleImg,
    subject: "Payment not going through",
    dateDay: "May 25, 2021",
    dateHour: "5:00 PM",
    updateDay: "Updated 2 day ago",
    customerName: "Christian Bale",
    customerDate: "24.05.2021",
  },
  {
    id: 4,
    status: "High",
    imgLink: HenryCavilImg,
    subject: "Unable to add replies",
    dateDay: "May 25, 2021",
    dateHour: "4:00 PM",
    updateDay: "Updated 2 day ago",
    customerName: "Henry Cavil",
    customerDate: "24.05.2021",
  },
  {
    id: 5,
    status: "Normal",
    imgLink: ChrisEvansImg,
    subject: "Downtime since last week",
    dateDay: "May 25, 2021",
    dateHour: "2:00 PM",
    updateDay: "Updated 3 day ago",
    customerName: "Chris Evans",
    customerDate: "23.05.2021",
  },
  {
    id: 6,
    status: "Low",
    imgLink: SamSmithImg,
    subject: "Referral Bonus",
    dateDay: "May 25, 2021",
    dateHour: "11:30 AM",
    updateDay: "Updated 4 day ago",
    customerName: "Sam Smith",
    customerDate: "22.05.2021",
  },
  {
    id: 7,
    status: "Normal",
    imgLink: SteveRogersImg,
    subject: "How do I change my password?",
    dateDay: "May 24, 2021",
    dateHour: "1:00 PM",
    updateDay: "Updated 6 days ago",
    customerName: "Steve Rogers",
    customerDate: "21.05.2021",
  },
];

const Table = () => {
  return (
    <div className="ticket-list">
      <div className="tickets-filter">
        <h3>All tickets</h3>
        <div className="filter-wrap">
          <button>{<TicketsSortIcon />} Sort</button>
          <button>{<TicketsFilterIcon />} Filter</button>
        </div>
      </div>

      <div className="ticket-lead">
        <div className="left-side">
          <h4>Ticket details</h4>
        </div>
        <div className="right-side">
          <h4 className="customer-name">Customer name</h4>
          <h4 className="customer-name">Date</h4>
          <h4 className="status">Priority</h4>
        </div>
      </div>

      {infoListArr.map((user, i) => (
        <TicketItem
          status={user.status}
          subject={user.subject}
          dateDay={user.dateDay}
          dateHour={user.dateHour}
          updateDay={user.updateDay}
          customerName={user.customerName}
          customerDate={user.customerDate}
          imgLink={user.imgLink}
          id={user.id}
          key={i}
        />
      ))}
    </div>
  );
};

export default Table;
