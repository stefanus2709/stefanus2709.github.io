import iskill from '../images/ISKILL-HD.png';
import easybengkel from '../images/EasyBengkel.png';

const ExperienceContent = () => {
    return (
        <div className='p-10'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className='w-4/12'><img src={iskill} alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title">ISKILL</h2>
                    <p>Designed and developed learning website named ISKILL with my team, as a campus project.</p>
                    <div className='flex flex-row-reverse items-center text-end gap-2'>
                        <div className="badge badge-info">
                            Info
                        </div>
                        <div className="badge badge-info">
                            Info
                        </div>
                        <div className="badge badge-info">
                            Belakang
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceContent