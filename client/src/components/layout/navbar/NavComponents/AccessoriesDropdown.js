import React from "react";
import { Link } from "react-router-dom";

const AccessoriesDropdown = () => {
  return (
    <div className="subMenuContainer hideOnlyMobile">
      <ul className="list-unstyled subList">
        <li className="appDropdown">
          <span className="h byCatTwo">For The Bicycle</span>
          <ul className="list-unstyled linksList bdRow hideOnlyMobile">
            <li>
              <Link to="/en/accessories/bags-and-car-racks">
                Bags and Car Racks
              </Link>
            </li>
            <li>
              <Link to="/en/accessories/bells-and-horns">Bells and Horns</Link>
            </li>
            <li>
              <Link to="/en/accessories/bottles-and-bottle-cages">
                Bottles and Bottle Cages
              </Link>
            </li>
            <li>
              <Link to="/en/accessories/components-and-spares">
                Components and Spares
              </Link>
            </li>
            <li>
              <Link to="/en/accessories/gps-and-cyclocomputers">
                GPS and Cyclocomputers
              </Link>
            </li>
            <li>
              <Link to="/en/accessories/lights">Lights</Link>
            </li>
            <li>
              <Link to="/en/accessories/locks">Locks</Link>
            </li>
            <li>
              <Link to="/en/accessories/maintenance-and-care">
                Maintenance and Care
              </Link>
            </li>
            <li>
              <Link to="/en/accessories/mudguards-and-protection">
                Mudguards and Protection
              </Link>
            </li>
            <li>
              <Link to="/en/accessories/others">Others</Link>
            </li>
            <li>
              <Link to="/en/accessories/pumps">Pumps</Link>
            </li>
            <li>
              <Link to="/en/accessories/stands">Stands</Link>
            </li>
            <li>
              <Link to="/en/accessories/tires-and-tubes">Tires & Tubes</Link>
            </li>
            <li>
              <Link to="/en/accessories/tools">Tools</Link>
            </li>
            <li>
              <Link to="/en/accessories/trainers">Trainers</Link>
            </li>
            <li>
              <Link to="/en/accessories/wheels">Wheels</Link>
            </li>
          </ul>
        </li>

        <li className="appDropdown">
          <span className="h byCatTwo">For The Rider</span>
          <ul className="list-unstyled linksList bdRow hideOnlyMobile">
            <li>
              <Link to="/en/accessories/backpacks">Backpacks</Link>
            </li>
            <li>
              <Link to="/en/accessories/compression-and-inner-wear">
                Compression and Inner Wear
              </Link>
            </li>
            <li>
              <Link to="/en/accessories/eyewear">Eyewear</Link>
            </li>
            <li>
              <Link to="/en/accessories/footwear">Footwear</Link>
            </li>
            <li>
              <Link to="/en/accessories/gloves">Gloves</Link>
            </li>
            <li>
              <Link to="/en/accessories/helmets">Helmets</Link>
            </li>
            <li>
              <Link to="/en/accessories/jerseys">Jerseys</Link>
            </li>
            <li>
              <Link to="/en/accessories/recovery-and-body-care">
                Recovery and Body Care
              </Link>
            </li>
            <li>
              <Link to="/en/accessories/shorts">Shorts</Link>
            </li>
            <li>
              <Link to="/en/accessories/t-shirts">T-shirts</Link>
            </li>
          </ul>
        </li>

        <li className="appDropdown displaySubInline">
          <span className="h byBrandTwo">By Brands</span>
          <ul className="list-unstyled linksList hideOnlyMobile">
            <li>
              <Link to="/en/accessories/2go">2Go</Link>
            </li>
            <li>
              <Link to="/en/accessories/apace">Apace</Link>
            </li>

            <li>
              <Link to="/en/accessories/firefox">Firefox</Link>
            </li>
            <li>
              <Link to="/en/accessories/flr">FLR</Link>
            </li>
            <li>
              <Link to="/en/accessories/garmin">Garmin</Link>
            </li>
            <li>
              <Link to="/en/accessories/giant">Giant</Link>
            </li>
            <li>
              <Link to="/en/accessories/hercules">Hercules</Link>
            </li>
            <li>
              <Link to="/en/accessories/merida">Merida</Link>
            </li>

            <li>
              <Link to="/en/accessories/xmr">XMR</Link>
            </li>
          </ul>
        </li>

        <li className="appLink allLink">
          <span className="h">
            <Link to="/en/accessories">
              <span className="subtext hidden-xs">
                Like to see our full <br />
                collection of Accessories?
              </span>
              <span className="pseudoButton">View All Accessories</span>
            </Link>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default AccessoriesDropdown;
