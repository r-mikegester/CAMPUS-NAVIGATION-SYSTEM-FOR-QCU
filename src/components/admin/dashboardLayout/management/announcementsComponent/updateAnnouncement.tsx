import { IonContent, IonPage } from "@ionic/react";
import AdminSideBar from "../../constant/adminSidebar";
import AdminHeader from "../../constant/adminHeader";
import { useHistory, useParams } from "react-router";
import { useEffect, useState } from "react";
import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../../../../../utils/firebase";
import { toast } from "react-toastify";

interface ContainerProps {
    name: string;
    announcementId?: string;
}

interface Announcement {
    id: string;
    name: string;
    announcementSource: string;
    announcementDesc: string;
    startDate: string;
    startTime: string;
}

const UpdateAnnouncement: React.FC<ContainerProps> = ({ name }) => {
    const history = useHistory();
    const { announcementId } = useParams<{ announcementId: string }>();
    const [announcement, setAnnouncement] = useState<Announcement | null>(null);
    const [announcementName, setAnnouncementName] = useState<string>("");
    const [announcementSource, setAnnouncementSource] = useState<string>("");
    const [announcementDesc, setAnnouncementDesc] = useState<string>("");
    const [startDate, setStartDate] = useState<string>("");
    const [startTime, setStartTime] = useState<string>("");

    const AnnouncementManagement = () => {
        history.push("/Announcements");
    };

    useEffect(() => {
        const fetchAnnouncement = async () => {
            try {
                const announcementRef = doc(db, "announcements", announcementId);
                const announcementDoc = await getDoc(announcementRef);

                if (announcementDoc.exists()) {
                    const announcementData = announcementDoc.data() as Announcement;
                    setAnnouncement(announcementData);

                    setAnnouncementName(announcementData.name);
                    setAnnouncementSource(announcementData.announcementSource);
                    setAnnouncementDesc(announcementData.announcementDesc);
                    setStartDate(announcementData.startDate);
                    setStartTime(announcementData.startTime);
                } else {
                    console.error("Announcement not found");
                    history.push("/Announcements");
                }
            } catch (error) {
                console.error("Error fetching announcement: ", error);
            }
        };

        fetchAnnouncement();
    }, [announcementId, history]);

    const handleUpdateAnnouncement = async () => {
        try {
            const now = serverTimestamp();

            const announcementRef = doc(db, "announcements", announcementId);
            await updateDoc(announcementRef, {
                name: announcementName,
                announcementSource,
                announcementDesc,
                startDate,
                startTime,
                updatedAt: now,
            });

            console.log("Announcement updated successfully!");
            history.push(
                "/Announcements",
                toast.success("Announcement updated successfully!")
            );
        } catch (error) {
            console.error("Error updating announcement: ", error);
            alert("Error on updating announcement.");
        }
    };

    return (
        <IonPage>
            <IonContent fullscreen>
                <div>
                    <AdminSideBar name={""} />
                    <AdminHeader name={""} />

                    <div className="items-center justify-center text-base-content bg-base-300 lg:ps-64 ">
                        <div className="w-full h-full grid-cols-4 grid-rows-5 gap-5 p-10 bg-base-100 rounded-tl-3xl">
                            <h1>Update Announcement</h1>
                            <button
                                onClick={AnnouncementManagement}
                                className="btn btn-primary"
                            >
                                Back
                            </button>
                            <div className="overflow-x-auto">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>Announcement Name:</th>
                                            <td>
                                                <input
                                                    type="text"
                                                    placeholder="Announcement Name"
                                                    value={announcementName}
                                                    onChange={(e) => setAnnouncementName(e.target.value)}
                                                    className="input input-bordered w-full max-w-xs"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Announcement Source:</th>
                                            <td>
                                                <input
                                                    type="text"
                                                    placeholder="Announcement Source"
                                                    value={announcementSource}
                                                    onChange={(e) =>
                                                        setAnnouncementSource(e.target.value)
                                                    }
                                                    className="input input-bordered w-full max-w-xs"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Announcement Description:</th>
                                            <td>
                                                <textarea
                                                    value={announcementDesc}
                                                    placeholder="Announcement Description..."
                                                    onChange={(e) => setAnnouncementDesc(e.target.value)}
                                                    className="textarea textarea-bordered textarea-xs w-full max-w-xs"
                                                ></textarea>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Start Date:</th>
                                            <td>
                                                <input
                                                    type="date"
                                                    value={startDate}
                                                    onChange={(e) => setStartDate(e.target.value)}
                                                    className="input input-bordered w-full max-w-xs"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Time:</th>
                                            <td>
                                                <input
                                                    type="time"
                                                    value={startTime}
                                                    onChange={(e) => setStartTime(e.target.value)}
                                                    className="input input-bordered w-full max-w-xs"
                                                />
                                            </td>
                                        </tr>

                                        <tr>
                                            <td colSpan={2}>
                                                <button
                                                    onClick={handleUpdateAnnouncement}
                                                    className="btn btn-primary"
                                                >
                                                    Update Event
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default UpdateAnnouncement;