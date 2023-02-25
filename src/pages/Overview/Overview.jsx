import React from "react";
import GraphImg from "../../assets/images/fullgraph.png";
import "./Overview.scss";

const Overview = () => {
  return (
    <>
      <div className="overview-wrap">
        <header>
          <button className="about">
            <h3>Unresolved</h3>
            <span>60</span>
          </button>
          <button className="about active">
            <h3>Overdue</h3>
            <span>16</span>
          </button>
          <button className="about">
            <h3>Open</h3>
            <span>43</span>
          </button>
          <button className="about">
            <h3>On hold</h3>
            <span>64</span>
          </button>
        </header>

        <main>
          <div className="diagraph">
            <div className="diagram-caption">
              <h3 className="diagram-title">Today's trends</h3>
              <div class="diagram-subtitle-wrap">
                <p className="diagram-subtitle">
                  as of 25 March 2021, 09:41 PM
                </p>
                <span className="today">Today</span>
                <span className="yesterday">Yesterday</span>
              </div>
            </div>
            <img className="diagraph-img" src={GraphImg} alt="Graph" />
          </div>
          <div className="statistics">
            <div className="stat-item">
              <h4>Resolved</h4>
              <span>449</span>
            </div>
            <div className="stat-item">
              <h4>Received</h4>
              <span>426</span>
            </div>
            <div className="stat-item">
              <h4>Average first response time</h4>
              <span>33m</span>
            </div>
            <div className="stat-item">
              <h4>Average response time</h4>
              <span>3h 8m</span>
            </div>
            <div className="stat-item">
              <h4>Resolution within SLA</h4>
              <span>94%</span>
            </div>
          </div>
        </main>

        <footer>
          <div className="unresolved-ticket">
            <div className="unresolved-ticket-lead">
              <div className="title">
                <h3>Unresolved ticket</h3>
                <button>View details</button>
              </div>
              <div className="subtitle">
                <p>
                  Group: <span>Support</span>
                </p>
              </div>
            </div>
            <div className="unresolved-ticket-body">
              <div className="item">
                <p>Waiting on Feature Request</p>
                <span>4238</span>
              </div>
              <div className="item">
                <p>Awaiting Customer Response</p>
                <span>1005</span>
              </div>
              <div className="item">
                <p>Awaiting Developer Fix</p>
                <span>914</span>
              </div>
              <div className="item">
                <p>Pending</p>
                <span>281</span>
              </div>
            </div>
          </div>

          <div className="tasks">
            <div className="tasks-lead">
              <div className="title">
                <h3>Tasks</h3>
                <button>View all</button>
              </div>
              <span className="subtitle">Today</span>
            </div>
            <div className="tasks-body">
              <form action="#" id="add-task-form">
                <div className="add-task">
                  <input type="text" placeholder="Create new task" required />
                  <button>+</button>
                </div>
              </form>
              <div className="checkboxes">
                <div className="check-item">
                  <div className="checkbox">
                    <input type="checkbox" />
                    <p>Finish ticket update</p>
                  </div>
                  <span className="urgent">Urgent</span>
                </div>
                <div className="check-item">
                  <div className="checkbox">
                    <input type="checkbox" />
                    <p>Create new ticket example</p>
                  </div>
                  <span className="new">New</span>
                </div>
                <div className="check-item">
                  <div className="checkbox">
                    <input type="checkbox" checked />
                    <p>Update ticket report</p>
                  </div>
                  <span className="default">Default</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Overview;
