import Tour from "../models/Tour.js";

//new tour

export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();
    res.status(200).json({
      success: true,
      message: "Created Successfully",
      data: savedTour,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failure.. try again" });
    console.log(error);
  }
};

//update tours

export const updateTour = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.param.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Updated Successfully",
      data: updatedTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update.. try again",
    });
    console.log(error);
  }
};
//delete tours
export const deleteTour = async (req, res) => {
  const id = req.params.id;

  try {
    await Tour.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to Delete.. try again",
    });
    console.log(error);
  }
};

// get one tour
export const getSingleTour = async (req, res) => {
  const id = req.params.id;
  try {
    const tour = await Tour.findById(id).populate("reviews");
    res.status(200).json({
      success: true,
      message: "Retrieved Successfully",
      data: tour,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Not Found 404",
    });
    console.log(error);
  }
};
// get all tours
export const getAllTour = async (req, res) => {
  const page = parseInt(req.query.page);
  try {
    const tours = await Tour.find({})
      .populate("reviews")
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      count: tours.length,
      message: "Successfully Done",
      data: tours,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Not Found 404",
    });
    console.log(error);
  }
};

//get tour by  search

export const getTourBySearch = async (req, res) => {
  //case sensitive 'i'
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    const tours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Successful",
      data: tours,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Not Found 404",
    });
    console.log(error);
  }
};

export const getFeaturedTour = async (req, res) => {
  const page = parseInt(req.query.page);
  try {
    const tours = await Tour.find({ featured: true })
      .populate("reviews")
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      count: tours.length,
      message: "Successfully Done",
      data: tours,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Not Found 404",
    });
    console.log(error);
  }
  
};
export const getTourCount = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();
    res.status(200).json({success: true, data: tourCount});
  } catch (err) {
    res.status(500).json({success: false, message: "Failed to fetch"});
  }
}