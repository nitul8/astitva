import CountUp from "react-countup";
import {useInView} from "react-intersection-observer";
import {Heart, Users, Award, Clock} from "lucide-react";

const StatsSection = () => {
    const {ref, inView} = useInView({triggerOnce: true});
    const approach = 980;
    const helped = 950;
    const live = 300;

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
                >
                    {/* People Approached */}
                    <div className="p-6 rounded-lg bg-gray-50">
                        <Heart className="h-10 w-10 mx-auto mb-4" />
                        <h3 className="text-3xl font-bold text-gray-900">
                            {inView && (
                                <CountUp
                                    start={0}
                                    end={approach}
                                    duration={2}
                                />
                            )}
                        </h3>
                        <p className="text-gray-600">People Approached</p>
                    </div>

                    {/* Active Donors */}
                    <div className="p-6 rounded-lg bg-gray-50">
                        <Users className="h-10 w-10 mx-auto mb-4" />
                        <h3 className="text-3xl font-bold text-gray-900">
                            {inView && (
                                <CountUp start={0} end={live} duration={2} />
                            )}
                        </h3>
                        <p className="text-gray-600">Active Donors</p>
                    </div>

                    {/* Success Rate */}
                    <div className="p-6 rounded-lg bg-gray-50">
                        <Award className="h-10 w-10 text-primary-600 mx-auto mb-4" />
                        <h3 className="text-3xl font-bold text-gray-900">
                            {inView && (
                                <CountUp
                                    start={0}
                                    end={((helped / approach) * 100).toFixed(2)}
                                    duration={2}
                                    decimals={2}
                                />
                            )}
                            %
                        </h3>
                        <p className="text-gray-600">Success Rate</p>
                    </div>

                    {/* 24/7 Support */}
                    <div className="p-6 rounded-lg bg-gray-50">
                        <Clock className="h-10 w-10 text-primary-600 mx-auto mb-4" />
                        <h3 className="text-3xl font-bold text-gray-900">
                            24/7
                        </h3>
                        <p className="text-gray-600">Support</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
